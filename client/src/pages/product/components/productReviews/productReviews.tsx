import React from 'react'
import { Rating } from '@mui/material'
import AddReview from './components/addReview/addReview'
import useReviews from 'hooks/useReviews'
import { ReviewProps } from 'services/reviewServices'
import blankImageProfile from 'assets/profileImage.webp'
import './productReviews.Module.scss'

export default function ProductReviews({
  productSlug,
}: {
  productSlug: string
}) {
  const { reviews } = useReviews(productSlug)

  return (
    <div className="product__reviews__container">
      <div className="product__reviews__header">
        <label className="product__reviews__title">Reviews</label>
        <div className="product__reviews__rating__container">
          {(reviews?.length || 0) > 0 && reviews && (
            <Rating
              value={
                reviews?.reduce((total: number, currentReview: ReviewProps) => {
                  return total + currentReview.value
                }, 0) / reviews?.length
              }
              size="large"
              readOnly
            />
          )}
        </div>
      </div>
      {(reviews?.length || 0) > 0 && (
        <div className="product__reviews__body">
          {reviews?.map((review) => {
            return (
              <div
                className="product__review__item"
                key={Math.random() * 10000}
              >
                <div className="product__review__item__body">
                  <div
                    className="product__review__item__image"
                    style={{
                      backgroundImage: `url("${
                        review.user ? review.user.photoURL : blankImageProfile
                      }")`,
                    }}
                  />
                  <label className="product__review__item__text">
                    <div className="product__review__item__header">
                      {review.user && (
                        <label className="product__review__item__name">
                          {review.user?.displayName}
                        </label>
                      )}
                      <div className="product__reviews__rating__container">
                        <Rating value={review.value} readOnly />
                      </div>
                    </div>

                    {review.text}
                  </label>
                </div>
              </div>
            )
          })}
        </div>
      )}
      <AddReview productSlug={productSlug} />
    </div>
  )
}
