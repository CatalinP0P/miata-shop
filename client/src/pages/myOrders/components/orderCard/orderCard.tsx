import React from 'react'
import { OrderProps } from 'types/order'
import './orderCard.Module.scss'
import { useNavigate } from 'react-router-dom'

export default function OrderCard({ order }: { order: OrderProps }) {
  const navigate = useNavigate()

  return (
    <div className="order__card">
      <div className="order__card__header">
        <label>
          Order Number: <span>{order._id as string}</span>
        </label>
        <label className="order__card__price">
          Total: ${order.amount / 100}
        </label>
      </div>
      <div className="order__card__body">
        <label className="order__card__date">
          {new Date(order.created_at).toUTCString()}
        </label>
        <div className="order__card__products">
          {order.products.map((product) => {
            return (
              <label key={product.slug} className="order__card__product">
                {product.quantity} x{' '}
                <span onClick={() => navigate(`/product/${product.slug}`)}>
                  {product.slug}
                </span>
              </label>
            )
          })}
        </div>
      </div>
      <div className="order__card__footer">
        <label
          className="order__card__link"
          onClick={() => navigate(`/my-orders/${order._id as string}`)}
        >
          View Order
        </label>
      </div>
    </div>
  )
}
