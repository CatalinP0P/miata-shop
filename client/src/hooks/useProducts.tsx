import { FilterProps } from 'types/filter'
import { filterType } from 'types/filter'
import client from 'utils/contentful'
import { Entry, EntrySkeletonType } from 'contentful'
import { useEffect, useState } from 'react'

export default function useProducts(filters: FilterProps) {
  const [products, setProducts] = useState<
    Entry<EntrySkeletonType, undefined, string>[] | null
  >(null)
  const [loading, setLoading] = useState(true)

  const fetchProducts = () => {
    let body = {
      content_type: 'miataShopProduct',
    }

    const dict = {
      q: 'fields.title[match]',
      minPrice: 'fields.price[gte]',
      maxPrice: 'fields.price[lte]',
      generation: 'fields.generation',
      category: 'fields.category',
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        body = { ...body, [dict[key as filterType]]: value }
      }
    })

    console.log(body)

    client.getEntries(body).then((response) => {
      setProducts(response.items)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading }
}
