import React from 'react'
import googleIcon from 'assets/google-icon.png'
import './googleButton.Module.scss'

export default function GoogleButton() {
  return (
    <button className="google__button">
      <img src={googleIcon} className="google__button__logo" />
      Sign with Google
    </button>
  )
}
