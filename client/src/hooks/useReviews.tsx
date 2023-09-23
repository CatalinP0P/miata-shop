import { useEffect, useState } from 'react'
import reviewServices from 'services/reviewServices'

interface ReviewProps {
  imageURL: string
  text: string
  value: number
  user: {
    photoURL: string
    displayName: string
    email: string
  } | null
}

export default function useReviews(productSlug: string) {
  const [reviews, setReviews] = useState<ReviewProps[] | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const data = await reviewServices.getFromProduct(productSlug)
    setReviews(data)
    console.log(data)

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { reviews, loading }
}
