import { useEffect, useState } from 'react'
import { getOrderFromId } from 'services/orderServices'
import { OrderProps } from 'types/order'

export const useOrder = (orderId: string, authToken: string) => {
  const [order, setOrder] = useState<OrderProps | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      const data = await getOrderFromId(orderId, authToken)
      if (data) {
        setOrder(data)
      }
    } catch (err) {
      setError(err as string)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (authToken == '' || authToken == null) return

    fetchData()
  }, [authToken])

  return { order, loading, error }
}
