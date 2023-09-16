import React from 'react'
import './sign.Module.scss'
import FormInput from 'components/forms/formInput/formInput'
import Header from 'components/layout/header/header'
import Separator from 'components/ui/separator/separator'
import GoogleButton from 'components/ui/auth/googleButton/googleButton'

export default function Sign() {
  return (
    <>
      <Header variant="fluid" />
      <div className="sign__container">
        <div className="sign__image"></div>
        <div className="sign__body">
          <div className="sign__form">
            <label className="sign__form__title">Sign in</label>
            <FormInput
              title="Email"
              type="email"
              placeholder="test@example.com"
            />
            <FormInput
              title="Password"
              type="password"
              placeholder="password"
            />
            <Separator title="or" />
            <GoogleButton />
          </div>
        </div>
      </div>
    </>
  )
}
