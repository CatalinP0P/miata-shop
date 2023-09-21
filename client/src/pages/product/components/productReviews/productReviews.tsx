import React from 'react'
import { Rating } from '@mui/material'
import dummyImage from 'assets/miata.png'
import './productReviews.Module.scss'

export default function ProductReviews({
  productSlug,
}: {
  productSlug: string
}) {
  console.log(productSlug)

  return (
    <div className="product__reviews__container">
      <div className="product__reviews__header">
        <label className="product__reviews__title">Reviews</label>
        <div className="product__reviews__rating__container">
          <Rating value={4} size="large" />
          <label className="product__reviews__rating__label">
            4/5 <span>141</span>
          </label>
        </div>
      </div>
      <div className="product__reviews__body">
        <div className="product__review__item">
          <div className="product__review__item__body">
            <div
              className="product__review__item__image"
              style={{ backgroundImage: `url("${dummyImage}")` }}
            />
            <label className="product__review__item__text">
              <div className="product__reviews__rating__container">
                <Rating value={4} />
                <label>4/5</label>
              </div>
              Minim sit Lorem aliquip in incididunt fugiat ea dolor nostrud.
              Sunt elit eu esse ad enim non cupidatat proident enim ad laboris.
              Velit esse consectetur sint exercitation duis aliqua nostrud
              nostrud nostrud adipisicing.
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
