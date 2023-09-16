import { useEffect, useState } from 'react'
import client from 'utils/contentful'
import { Entry, EntrySkeletonType } from 'contentful'

export default function useGenerations() {
  const [generations, setGenerations] = useState<
    Entry<EntrySkeletonType, undefined, string>[]
  >([])
  const [loading, setLoading] = useState(true)

  const fetchGenerations = () => {
    client
      .getEntries({ content_type: 'miataShopGeneration' })
      .then((response) => {
        setGenerations(response.items)
        setLoading(false)
      })
  }

  useEffect(() => fetchGenerations(), [])

  return { generations, loading }
}
