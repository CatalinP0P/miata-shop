import React from 'react'
import googleIcon from 'assets/google-icon.png'
import './googleButton.Module.scss'
import { useAuth } from 'context/authContext'
import { useNavigate } from 'react-router-dom'

export default function GoogleButton() {
  const { signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  return (
    <button
      className="google__button"
      onClick={() => signInWithGoogle().then(() => navigate('/'))}
    >
      <img src={googleIcon} className="google__button__logo" />
      Sign with Google
    </button>
  )
}
