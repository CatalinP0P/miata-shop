import React from 'react'
import { Remove, Add } from '@mui/icons-material'
import './cartItem.Module.scss'

export default function CartItem({
  product,
}: {
  product: { slug: string; quantity: number }
}) {
  return (
    <div className="cart__popup__item__container">
      <div className="cart__popup__item" key={product.slug as string}>
        <div className="cart__popup__item__group">
          <div className="cart__popup__item__image"></div>
          <div className="cart__popup__item__body">
            <label className="cart__popup__item__title">Titlu</label>
            <label className="cart__popup__item__slug">{product.slug}</label>
            <label className="cart__popup__item__price">
              $1000{' '}
              <span>
                ({product.quantity} x {'$1000'})
              </span>
            </label>
          </div>
        </div>

        <div className="cart__popup__item__stock__selector">
          <div className="cart__popup__item__stock__button">
            <Remove />
          </div>
          <label>{product.quantity}</label>
          <div className="cart__popup__item__stock__button">
            <Add />
          </div>
        </div>
      </div>
    </div>
  )
}
