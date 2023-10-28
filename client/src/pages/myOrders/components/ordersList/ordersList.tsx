import React, { useState } from 'react'
import { useOrders } from 'hooks/useOrders'
import Separator from 'components/ui/separator/separator'
import OrderCard from '../orderCard/orderCard'
import { OrderProps } from 'types/order'
import './ordersList.Module.scss'

export default function OrdersList({ authToken }: { authToken: string }) {
  const { orders } = useOrders(authToken)

  const [timespan, setTimespan] = useState('All time')

  return (
    <div className="orders__list">
      <label className="orders__header">
        <label className="orders__title">My Orders</label>
        <Separator />
        <div className="orders__header__controls">
          <div className="orders__timespan__selector">
            <label className="orders__timespan__label">Orders from</label>
            <select
              className="orders__timespan__field"
              defaultValue={timespan}
              onChange={(e) => setTimespan(e.target.value)}
            >
              <option>All Time</option>
              <option>Last 3 Months</option>
            </select>
          </div>
        </div>
      </label>
      <div className="orders__list__grid">
        {orders?.map((order: OrderProps) => {
          return <OrderCard key={Math.random() * 1000} order={order} />
        })}
      </div>
    </div>
  )
}
