import React, { useEffect } from 'react'
import googleIcon from 'assets/google-icon.png'
import './googleButton.Module.scss'
import { useAuth } from 'context/authContext'
import { useNavigate } from 'react-router-dom'

export default function GoogleButton() {
  const { currentUser, loading, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return

    if (currentUser) navigate('/')
  }, [loading])

  return (
    <button className="google__button" onClick={() => signInWithGoogle()}>
      <img src={googleIcon} className="google__button__logo" />
      Sign with Google
    </button>
  )
}
