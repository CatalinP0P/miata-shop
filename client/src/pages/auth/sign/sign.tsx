import React from 'react'
import Header from 'components/layout/header/header'
import './sign.Module.scss'
import SignForm from 'components/forms/auth/signForm/signForm'

export default function Sign() {
  return (
    <>
      <Header variant="fluid" />
      <div className="sign__container">
        <div className="sign__image">
          <div className="sign__image__gradient" />
        </div>
        <div className="sign__body">
          <SignForm />
        </div>
      </div>
    </>
  )
}
