import React, { useEffect, useState } from 'react'
import { useAuth } from 'context/authContext'
import { useNavigate } from 'react-router-dom'
import OrdersList from './components/ordersList/ordersList'
import Header from 'components/layout/header/header'
import Footer from 'components/layout/footer/footer'
import './myOrders.Module.scss'

export default function MyOrders() {
  const { currentUser, loading } = useAuth()
  const [authToken, setAuthToken] = useState<string | null>(null)

  const navigate = useNavigate()

  const handleLoad = async () => {
    const token = await currentUser?.getIdToken()
    setAuthToken(token as string)
  }

  useEffect(() => {
    if (loading) return

    if (currentUser == null) {
      navigate('/auth/sign')
    }

    handleLoad()
  }, [loading])

  return authToken ? (
    <>
      <Header />
      <div className="myorders__container">
        <OrdersList authToken={authToken} />
      </div>
      <Footer />
    </>
  ) : (
    <div></div>
  )
}
