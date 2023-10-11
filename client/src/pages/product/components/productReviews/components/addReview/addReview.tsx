import { Rating } from '@mui/material'
import React, { useState } from 'react'
import Button from 'components/ui/button/button'
import './addReview.Module.scss'
import { useAuth } from 'context/authContext'
import reviewServices from 'services/reviewServices'

export default function AddReview({ productSlug }: { productSlug: string }) {
  const { currentUser } = useAuth()
  const [value, setValue] = useState('')
  const [rating, setRating] = useState(5)

  const sendReview = async () => {
    let token = ''
    token = (await currentUser?.getIdToken()) + ''
    await reviewServices.postReview({
      productSlug: productSlug,
      text: value,
      value: rating,
      token,
    })

    setTimeout(() => {
      window.location.reload()
    }, 125)
  }

  return (
    <div className="add__review__container">
      <div className="add__review__area">
        <div className="add__review__body">
          <div className="add__review__body__header">
            <label className="add__review__body__name">
              {currentUser?.displayName}
            </label>
            <Rating
              value={rating}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => {
                setRating(e?.target?.value)
              }}
            />
          </div>
          <textarea
            className="add__review__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add your Review"
          ></textarea>
        </div>
        <Button className="add__review__button" onClick={sendReview}>
          Add
        </Button>
      </div>
    </div>
  )
}
