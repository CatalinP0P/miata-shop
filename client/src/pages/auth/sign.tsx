import React, { useState } from 'react'
import './sign.Module.scss'
import FormInput from 'components/forms/formInput/formInput'
import Header from 'components/layout/header/header'
import Separator from 'components/ui/separator/separator'
import GoogleButton from 'components/ui/auth/googleButton/googleButton'
import Button from 'components/ui/button/button'
import { useAuth } from 'context/authContext'

export default function Sign() {
  const { signInWithEmail, error } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Header variant="fluid" />
      <div className="sign__container">
        <div className="sign__image">
          <div className="sign__image__gradient" />
        </div>
        <div className="sign__body">
          <div className="sign__form">
            <label className="sign__form__title">Sign in</label>
            <FormInput
              title="Email"
              type="email"
              placeholder="test@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              title="Password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <label className="sign__form__error">{error}</label>}
            <Button
              variant="primary"
              onClick={() =>
                signInWithEmail(email.trim(), password).then(() => {
                  setEmail('')
                  setPassword('')
                })
              }
            >
              Sign in
            </Button>
            <Separator title="or" />
            <GoogleButton />
          </div>
        </div>
      </div>
    </>
  )
}
