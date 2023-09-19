import React from 'react'
import { Entry, EntrySkeletonType } from 'contentful'
import './productCard.Module.scss'
import Button from '../button/button'

export default function ProductCard({
  product,
}: {
  product: Entry<EntrySkeletonType, undefined, string>
}) {
  return (
    <div className="product__card__container">
      <div
        className="product__card__image"
        style={{
          backgroundImage: `url('${
            product.fields.images
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ((product.fields.images as any).fields.file.url as string)
              : ''
          }')`,
        }}
      ></div>
      <div className="product__card__body">
        <label className="product__card__title">
          {product.fields.title as string}
        </label>
        <div className="product__card__price__container">
          <label className="product__card__price">
            ${product.fields.price as string}
          </label>
          {product.fields.oldPrice && (
            <label className="product__card__oldprice">
              ${product.fields.oldPrice as string}
            </label>
          )}
        </div>
        <Button variant="primary" className="product__card__button">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
