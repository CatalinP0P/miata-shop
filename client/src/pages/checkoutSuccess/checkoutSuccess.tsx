import { CheckRounded } from '@mui/icons-material'
import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import Button from 'components/ui/button/button'
import React, { useEffect } from 'react'
import './checkoutSuccess.Module.scss'
import { processOrder } from 'services/orderServices'
import { useAuth } from 'context/authContext'

export default function CheckoutSuccess() {
  const searchParams = new URLSearchParams(window.location.search)
  const { currentUser, loading } = useAuth()

  const completeOrder = async () => {
    const sessionId = searchParams.get('session_id')
    processOrder(
      sessionId as string,
      (await currentUser?.getIdToken()) as string,
    )
  }

  useEffect(() => {
    if (loading) return
    completeOrder()
  }, [searchParams.get('session_id'), loading])

  return (
    <div>
      <Header variant="fluid" />
      <div className="page__container">
        <div className="page__container__body">
          <div className="page__icon">
            <CheckRounded fontSize="inherit" />
          </div>
          <label className="page__title">Thanks for your order!</label>
          <label className="page__subtitle">
            Thanks for Choosing Miata Shop – Your Passion, Our Priority!
          </label>
        </div>
        <div className="page__button__container">
          <Button size="large" onClick={() => (window.location.href = '/')}>
            Back to Shop
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
