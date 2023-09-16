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
  const { error } = useAuth()

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
    console.log(name, value)
    console.log(e)
    setUserData((oldData) => {
      return { ...oldData, [name]: value }
    })
  }

  const registerAccount = () => {
    console.log(userData)
  }

  return (
    <>
      <div className="register__form">
        <label className="register__form__title">Sign in</label>
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
          title="confirmPassword"
          type="password"
          placeholder="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
        {error && <label className="sign__form__error">{error}</label>}
        <Button variant="primary" onClick={registerAccount}>
          Create Account
        </Button>
        <Separator title="or" />
        <GoogleButton />
      </div>
    </>
  )
}
