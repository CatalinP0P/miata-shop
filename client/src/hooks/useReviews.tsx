import { useEffect, useState } from 'react'
import dummyImage from 'assets/miatas.jpeg'

interface ReviewProps {
  imageURL: string
  text: string
  rating: number
}

export default function useReviews(productSlug: string) {
  const [reviews, setReviews] = useState<ReviewProps[] | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    console.log(productSlug)
    setReviews([
      {
        imageURL: dummyImage,
        text: 'This is a dummy comment',
        rating: 2,
      },
      {
        imageURL: dummyImage,
        text: 'Huoaaa',
        rating: 5,
      },
      {
        imageURL: dummyImage,
        text: 'This is a dummy comment',
        rating: 4,
      },
    ])
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { reviews, loading }
}
