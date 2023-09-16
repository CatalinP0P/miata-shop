import React from 'react'
import './header.Module.scss'
import Logo from 'components/ui/logo/logo'

interface HeaderProps {
  variant?: 'normal' | 'fluid'
}

export default function Header({ variant = 'normal' }: HeaderProps) {
  return (
    <div className={'header__container ' + `header__container--${variant}`}>
      <div className="header__body">
        <Logo />
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
