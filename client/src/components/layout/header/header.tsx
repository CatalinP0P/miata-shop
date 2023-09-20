import React from 'react'
import './header.Module.scss'
import Logo from 'components/ui/logo/logo'
import { useAuth } from 'context/authContext'
import Button from 'components/ui/button/button'
import { ExitToApp } from '@mui/icons-material'
import SearchBar from './components/searchBar/searchBar'
import UserCard from 'components/ui/userCard/userCard'
import MobileMenu from './components/mobileMenu/mobileMenu'

interface HeaderProps {
  variant?: 'normal' | 'fluid'
}

export default function Header({ variant = 'normal' }: HeaderProps) {
  const { currentUser, signOut } = useAuth()

  return (
    <div className={'header__container ' + `header__container--${variant}`}>
      <div className="header__body">
        <Logo />
        <div className="header__links__container">
          <label className="header__link">Home</label>
          <label className="header__link">Shop</label>
          <label className="header__link">Explore</label>
        </div>

        <SearchBar />

        {currentUser != null && (
          <span className="header__account__container">
            <UserCard user={currentUser} />
            <div onClick={signOut}>
              <ExitToApp fontSize="large" className="header__account__exit" />
            </div>
          </span>
        )}

        {currentUser == null && (
          <div
            className="header__sign_button"
            onClick={() => (window.location.href = '/auth/sign')}
          >
            <Button variant={'tertiary'}>Sign in</Button>
          </div>
        )}

        <MobileMenu />
      </div>
    </div>
  )
}
