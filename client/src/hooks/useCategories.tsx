import { useEffect, useState } from 'react'
import client from 'utils/contentful'
import { Entry, EntrySkeletonType } from 'contentful'

export default function useCategories() {
  const [categories, setCategories] = useState<
    null | Entry<EntrySkeletonType, undefined, string>[]
  >([])
  const [loading, setLoading] = useState(true)

  const fetchCategories = () => {
    client
      .getEntries({ content_type: 'miataShopCategory' })
      .then((response) => {
        setCategories(response.items)
        setLoading(false)
      })
  }

  useEffect(() => fetchCategories(), [])

  return { categories, loading }
}
