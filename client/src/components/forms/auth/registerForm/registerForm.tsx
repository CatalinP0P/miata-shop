import React, { useState } from 'react'
import FormInput from 'components/forms/formInput/formInput'
import Button from 'components/ui/button/button'
import GoogleButton from 'components/ui/auth/googleButton/googleButton'
import Separator from 'components/ui/separator/separator'
import { useAuth } from 'context/authContext'
import './registerForm.Module.scss'

interface RegisterProps {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterForm() {
  const { error, createAccount } = useAuth()

  const [userData, setUserData] = useState<RegisterProps>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = e.target.name
    const value = e.target.value
    setUserData((oldData) => {
      return { ...oldData, [name]: value }
    })
  }

  const registerAccount = () => {
    createAccount(userData.email, userData.password, userData.confirmPassword)
  }

  return (
    <>
      <div className="register__form">
        <label className="register__form__title">Register Account</label>
        <FormInput
          title="Email"
          type="email"
          name="email"
          placeholder="test@example.com"
          value={userData.email}
          onChange={handleChange}
        />
        <FormInput
          title="Password"
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <FormInput
          title="Confirm Password"
          type="password"
          placeholder="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
        {error && <label className="register__form__error">{error}</label>}
        <Button variant="primary" onClick={registerAccount}>
          Create Account
        </Button>
        <label className="register__form__link">
          have an account?{' '}
          <span>
            <a href="/auth/sign">sign in</a>
          </span>
        </label>
        <Separator title="or" />
        <GoogleButton />
      </div>
    </>
  )
}
