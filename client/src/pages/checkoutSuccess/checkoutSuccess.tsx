import { CheckRounded } from '@mui/icons-material'
import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import Button from 'components/ui/button/button'
import React from 'react'
import './checkoutSuccess.Module.scss'

export default function CheckoutSuccess() {
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
