import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import { useOrder } from 'hooks/useOrder'
import { useAuth } from 'context/authContext'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import OrderProductCard from './components/orderProductCard/orderProductCard'
import './order.Module.scss'

export default function Order() {
  const navigate = useNavigate()
  const authProps = useAuth()
  const { id } = useParams()

  const [authToken, setAuthToken] = useState<string | null>(null)
  const { order, loading, error } = useOrder(id as string, authToken as string)

  const handleLoad = async () => {
    const token = await authProps.currentUser?.getIdToken()
    setAuthToken(token as string)
  }

  useEffect(() => {
    if (authProps.loading) return

    handleLoad()
  }, [authProps.loading])

  useEffect(() => {
    if (loading) return

    if (error) {
      navigate('/my-orders')
    }
  }, [loading])

  return (
    <>
      <Header />
      <div className="order">
        <div className="order__info">
          <div className="order__header">
            <label className="order__title">
              Order No. {order?._id as string}
            </label>
            <div className="order__header__info">
              <div className="info__item">
                <label className="info__item__key">Placed at:</label>
                <label className="info__item__value">
                  {new Date(order?.created_at as string).toUTCString()}
                </label>
              </div>
              <div className="info__item">
                <label className="info__item__key">Amount:</label>
                <label className="info__item__value">
                  ${(order?.amount as number) / 100}
                </label>
              </div>
            </div>
          </div>

          <div className="order__body">
            <div className="order__info__address">
              <div className="info__address__card">
                <label className="card__title">Shipping Address</label>
                <label>{order?.shipping_details.name} </label>
                <label>
                  {order?.shipping_details.address.country},
                  {order?.shipping_details.address.city},
                  {order?.shipping_details.address.postal_code}
                </label>
                <label>{order?.shipping_details.address.state}</label>
                <label>
                  {order?.shipping_details.address.line1},
                  {order?.shipping_details.address.line2}
                </label>
              </div>
              <div className="info__address__card">
                <label className="card__title">Customer Details</label>
                <label>{order?.customer_details.name} </label>
                <label>
                  {order?.customer_details.email},{' '}
                  {order?.customer_details.phone},
                </label>
                <label>
                  {order?.customer_details.address.country},
                  {order?.customer_details.address.city},
                  {order?.customer_details.address.postal_code}
                </label>
              </div>
            </div>

            <div className="order__products">
              <label className="order__products__title">Products</label>
              {order?.products.map((product) => {
                return (
                  <OrderProductCard
                    key={product.slug}
                    slug={product.slug}
                    quantity={product.quantity}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
