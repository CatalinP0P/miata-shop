import React from 'react'
import { Rating } from '@mui/material'
import './productReviews.Module.scss'
import AddReview from './components/addReview/addReview'
import useReviews from 'hooks/useReviews'

export default function ProductReviews({
  productSlug,
}: {
  productSlug: string
}) {
  console.log(productSlug)
  const { reviews } = useReviews(productSlug)

  return (
    <div className="product__reviews__container">
      <div className="product__reviews__header">
        <label className="product__reviews__title">Reviews</label>
        <div className="product__reviews__rating__container">
          <Rating value={4} size="large" readOnly />
        </div>
      </div>
      <div className="product__reviews__body">
        {reviews?.map((review) => {
          return (
            <div className="product__review__item" key={Math.random() * 10000}>
              <div className="product__review__item__body">
                <div
                  className="product__review__item__image"
                  style={{ backgroundImage: `url("${review.imageURL}")` }}
                />
                <label className="product__review__item__text">
                  <div className="product__reviews__rating__container">
                    <Rating value={review.rating} readOnly />
                  </div>
                  {review.text}
                </label>
              </div>
            </div>
          )
        })}

        <AddReview productSlug={productSlug} />
      </div>
    </div>
  )
}
