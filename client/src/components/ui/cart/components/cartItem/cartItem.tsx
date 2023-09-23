import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Remove, Add } from '@mui/icons-material'
import './cartItem.Module.scss'
import { useCart } from 'context/cartContext'
import useProduct from 'hooks/useProduct'

export default function CartItem({
  product,
  total,
  setTotal,
}: {
  product: { slug: string; quantity: number }
  total?: number
  setTotal?: Dispatch<SetStateAction<number>>
}) {
  const { addProductToCart, removeFromCart } = useCart()
  const productData = useProduct(product.slug + '')

  useEffect(() => {
    if (productData.loading) return

    if (total != null && setTotal) {
      setTotal((oldTotal: number) => {
        return (
          oldTotal +
          parseInt(productData?.product?.fields.price + '') * product.quantity
        )
      })
    }
  }, [productData.loading])

  const increaseQuantity = () => {
    addProductToCart({ ...product, quantity: 1 })
    if (total != null && setTotal) {
      setTotal((oldTotal: number) => {
        return oldTotal + parseInt(productData?.product?.fields.price + '')
      })
    }
  }

  const decreaseQuantity = () => {
    removeFromCart(product.slug)

    if (total != null && setTotal) {
      setTotal((oldTotal: number) => {
        return oldTotal - parseInt(productData?.product?.fields.price + '')
      })
    }
  }

  return (
    <div className="cart__popup__item__container">
      <div className="cart__popup__item" key={product.slug as string}>
        <div className="cart__popup__item__group">
          <div
            onClick={() => (window.location.href = '/product/' + product.slug)}
            className="cart__popup__item__image"
            style={{
              backgroundImage: `url("${
                productData?.product?.fields.images
                  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ((productData.product.fields.images as any).fields.file
                      .url as string)
                  : ''
              }")`,
            }}
          ></div>
          <div className="cart__popup__item__body">
            <label className="cart__popup__item__title">
              {productData?.product?.fields.title as string}
            </label>
            <label className="cart__popup__item__slug">{product.slug}</label>
            <label className="cart__popup__item__price">
              $
              {parseInt(productData?.product?.fields.price + '') *
                product.quantity}{' '}
              <span>
                ({product?.quantity} x {`$${productData.product?.fields.price}`}
                )
              </span>
            </label>
          </div>
        </div>

        <div className="cart__popup__item__stock__selector">
          <div
            className="cart__popup__item__stock__button"
            onClick={decreaseQuantity}
          >
            <Remove />
          </div>
          <label>{product.quantity}</label>
          <div
            className="cart__popup__item__stock__button"
            onClick={increaseQuantity}
          >
            <Add />
          </div>
        </div>
      </div>
    </div>
  )
}
