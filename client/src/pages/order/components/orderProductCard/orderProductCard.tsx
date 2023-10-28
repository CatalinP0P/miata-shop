import useProduct from 'hooks/useProduct'
import React from 'react'
import './orderProductCard.Module.scss'
import { useNavigate } from 'react-router-dom'

export default function OrderProductCard({
  slug,
  quantity,
}: {
  slug: string
  quantity: number
}) {
  const { product } = useProduct(slug)
  const navigate = useNavigate()

  return (
    <div
      className="order__product__card"
      onClick={() => navigate(`/product/${slug}`)}
    >
      <div className="order__product__card__section">
        <div
          className="order__product__image"
          style={{
            backgroundImage: `url("${
              product?.fields.images
                ? 'https:' +
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ((product.fields.images as any).fields.file.url as string)
                : ''
            }")`,
          }}
        />
        <label>{product?.fields.title as string}</label>
      </div>
      <div className="order__product__card__section order__product__card__section--vertical">
        <label>${product?.fields.price as string}</label>
        <label>{quantity} Pieces</label>
      </div>
    </div>
  )
}
