import { Rating } from '@mui/material'
import React, { useState } from 'react'
import Button from 'components/ui/button/button'
import './addReview.Module.scss'
import { useAuth } from 'context/authContext'

export default function AddReview({ productSlug }: { productSlug: string }) {
  const { currentUser } = useAuth()
  const [value, setValue] = useState('')
  const [rating, setRating] = useState(5)

  console.log(productSlug)

  const sendReview = () => {
    setRating(1)
  }

  return (
    <div className="add__review__container">
      <div
        className="add__review__image"
        style={{ backgroundImage: `url("${currentUser?.photoURL}")` }}
      ></div>
      <div className="add__review__body">
        <Rating
          value={rating}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
            setRating(e?.target?.value)
          }}
        />
        <textarea
          className="add__review__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add your Review"
        ></textarea>
      </div>
      <div className="add__review__button">
        <Button onClick={sendReview}>Add</Button>
      </div>
    </div>
  )
}
