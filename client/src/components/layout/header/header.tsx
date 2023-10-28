import React from 'react'
import './header.Module.scss'
import Logo from 'components/ui/logo/logo'
import { useAuth } from 'context/authContext'
import Button from 'components/ui/button/button'
import SearchBar from './components/searchBar/searchBar'
import MobileMenu from './components/mobileMenu/mobileMenu'
import { links } from 'static/links'
import Cart from 'components/ui/cart/cart'
import LoggedUserCard from './components/loggedUserCard/loggedUserCard'

interface HeaderProps {
  variant?: 'normal' | 'fluid'
}

export default function Header({ variant = 'normal' }: HeaderProps) {
  const { currentUser } = useAuth()

  return (
    <div className={'header__container ' + `header__container--${variant}`}>
      <div className="header__body">
        <Logo />
        <div className="header__links__container">
          {links.map((link) => {
            return (
              <label
                key={link.title}
                className="header__link"
                onClick={() => (window.location.href = link.path)}
              >
                {link.title}
              </label>
            )
          })}
        </div>

        <SearchBar />

        <div className="header__body__item">
          <Cart />
          {currentUser != null && (
            <span className="header__account__container">
              <LoggedUserCard currentUser={currentUser} />
            </span>
          )}

          {currentUser == null && (
            <div
              className="header__sign__button"
              onClick={() => (window.location.href = '/auth/sign')}
            >
              <Button variant={'tertiary'}>Sign in</Button>
            </div>
          )}

          <MobileMenu />
        </div>
      </div>
    </div>
  )
}
