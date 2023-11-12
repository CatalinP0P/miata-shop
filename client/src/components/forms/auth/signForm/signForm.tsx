import React, { useState } from 'react'
import FormInput from 'components/forms/formInput/formInput'
import Button from 'components/ui/button/button'
import GoogleButton from 'components/ui/auth/googleButton/googleButton'
import Separator from 'components/ui/separator/separator'
import { useAuth } from 'context/authContext'
import './signForm.Module.scss'

export default function SignForm() {
  const { error, signInWithEmail } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="sign__form">
        <label className="sign__form__title">Sign in</label>
        <FormInput
          title="Email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          title="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <label className="sign__form__error">{error}</label>}
        <Button
          variant="primary"
          onClick={() => signInWithEmail(email.trim(), password)}
        >
          Sign in
        </Button>
        <label className="sign__form__link">
          no account? <a href="/auth/register">create one</a>
        </label>
        <Separator title="or" />
        <GoogleButton />
      </div>
    </>
  )
}
