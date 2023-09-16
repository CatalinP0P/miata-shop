import React from 'react'
import miataImage from 'assets/miata.png'
import './logo.Module.scss'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
  const navigate = useNavigate()

  return (
    <label className="header__logo" onClick={() => navigate('/')}>
      <img className="header__logo__image" src={miataImage} />
      <label className="header__logo__text">Miata Shop</label>
    </label>
  )
}
