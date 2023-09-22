import React, { useEffect, useState } from 'react'
import { ShoppingBag } from '@mui/icons-material'
import './cart.Module.scss'
import { useCart } from 'context/cartContext'
import Separator from '../separator/separator'
import CartItem from './components/cartItem/cartItem'
import Button from '../button/button'

export default function Cart() {
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    if (visibility) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
  }, [visibility])

  const { products, loading } = useCart()

  useEffect(() => {
    if (loading) return

    console.log(products)
  }, [loading, products])

  return (
    <>
      <div className="cart__button" onClick={() => setVisibility(!visibility)}>
        <ShoppingBag fontSize="large" />
        {products?.length && (
          <div className="cart__button__length">{products.length}</div>
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
                />
              )
            })}
          </div>
        </div>
        <div className="cart__popup__footer">
          <Button>Confirm Order</Button>
        </div>
      </div>
      {visibility && (
        <div className="cart__overlay" onClick={() => setVisibility(false)} />
      )}
    </>
  )
}
