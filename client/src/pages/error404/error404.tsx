import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import React from 'react'
import ghostImage from 'assets/ghost.svg'
import './error404.Module.scss'
import { ArrowRightAlt } from '@mui/icons-material'

export default function Error404() {
  return (
    <>
      <Header variant="fluid" />

      <div className="error404__container">
        <div
          className="error404__image"
          style={{ backgroundImage: `url("${ghostImage}")` }}
        ></div>
        <div className="error404__body">
          <label className="error404__title">ERROR 404</label>
          <label className="error404__subtitle">
            Page you are trying to access was not found
          </label>
          <a href="/" className="error404__redirect">
            Go to frontpage <ArrowRightAlt />
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
