import React, { useEffect, useState } from 'react'
import { ShoppingBag } from '@mui/icons-material'
import './cart.Module.scss'
import { useCart } from 'context/cartContext'
import Separator from '../separator/separator'
import CartItem from './components/cartItem/cartItem'
import Button from '../button/button'
import { useAuth } from 'context/authContext'

export default function Cart() {
  const [visibility, setVisibility] = useState(false)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (visibility) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
  }, [visibility])

  const { products, checkout } = useCart()
  const { currentUser } = useAuth()

  const confirmOrder = () => {
    if (currentUser == null) {
      return (window.location.href = './auth/sign')
    }
    setLoading(true)
    checkout()
  }

  return (
    <>
      <div className="cart__button" onClick={() => setVisibility(!visibility)}>
        <ShoppingBag fontSize="large" />
        {products && products.length > 0 && (
          <div className="cart__button__length">
            {products.reduce(
              (total, product) => (total += product.quantity),
              0,
            )}
          </div>
        )}
      </div>
      <div
        className={
          'cart__popup ' +
          (visibility ? 'cart__popup--visible' : 'cart__popup--hidden')
        }
      >
        <div className="cart__popup__header">
          <label className="cart__popup__title">Your Cart</label>
          <Separator />
          <div className="cart__popup__body">
            {products?.map((product) => {
              return (
                <CartItem
                  key={product.slug}
                  product={product as { slug: string; quantity: number }}
                  total={total}
                  setTotal={setTotal}
                />
              )
            })}
          </div>
        </div>
        <div className="cart__popup__footer">
          <label className="cart__popup__total">
            Total:
            <span>${total}</span>
          </label>
          <Separator variant="dotted" />
          <Button size="large" onClick={confirmOrder}>
            Confirm Order
          </Button>
        </div>
      </div>
      {loading && <div className="loading__overlay"></div>}
      {visibility && (
        <div className="cart__overlay" onClick={() => setVisibility(false)} />
      )}
    </>
  )
}
