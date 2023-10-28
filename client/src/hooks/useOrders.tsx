import { useEffect, useState } from 'react'
import { getOrdersFromUserId } from 'services/orderServices'
import { OrderProps } from 'types/order'

export const useOrders = (authToken: string) => {
  const [orders, setOrders] = useState<OrderProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async () => {
    const data: OrderProps[] = await getOrdersFromUserId(authToken)
    setOrders(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [authToken])

  return { orders, loading }
}
