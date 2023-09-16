import React from 'react'
import Header from 'components/layout/header/header'
import './register.Module.scss'
import RegisterForm from 'components/forms/auth/registerForm/registerForm'

export default function Register() {
  return (
    <>
      <Header variant="fluid" />
      <div className="register__container">
        <div className="register__image">
          <div className="register__image__gradient" />
        </div>
        <div className="register__body">
          <RegisterForm />
        </div>
      </div>
    </>
  )
}
