import client from 'utils/contentful'
import { Entry, EntrySkeletonType } from 'contentful'
import { useEffect, useState } from 'react'

export default function useProduct(slug: string) {
  const [product, setProduct] = useState<Entry<
    EntrySkeletonType,
    undefined,
    string
  > | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProducts = () => {
    const body = {
      content_type: 'miataShopProduct',
      'fields.slug': slug,
    }

    console.log(slug)

    client.getEntries(body).then((response) => {
      setProduct(response.items[0])
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { product, loading }
}
