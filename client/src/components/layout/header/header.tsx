import React from 'react'
import './header.Module.scss'

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__body">
        <label className="header__logo">Miata Shop</label>
        <div className="header__links__container">
          <label className="header__link">Home</label>
          <label className="header__link">Shop</label>
          <label className="header__link">Explore</label>
        </div>

        <div className="header__account__container">
          <div className="header__account__text__container">
            <label className="header__account__name">Nume Prenume</label>
            <label className="header__account__email">test@example.com</label>
          </div>

          <div className="header__account__image" />
        </div>
      </div>
    </div>
  )
}
