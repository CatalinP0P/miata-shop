import React from 'react'
import './header.Module.scss'
import Logo from 'components/ui/logo/logo'
import { useAuth } from 'context/authContext'
import Button from 'components/ui/button/button'
import { ExitToApp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  variant?: 'normal' | 'fluid'
}

export default function Header({ variant = 'normal' }: HeaderProps) {
  const { currentUser, signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <div className={'header__container ' + `header__container--${variant}`}>
      <div className="header__body">
        <Logo />
        <div className="header__links__container">
          <label className="header__link">Home</label>
          <label className="header__link">Shop</label>
          <label className="header__link">Explore</label>
        </div>

        {currentUser != null && (
          <div className="header__account__container">
            <div className="header__account__text__container">
              <label className="header__account__name">
                {currentUser?.displayName}
              </label>
              <label className="header__account__email">
                {currentUser?.email}
              </label>
            </div>

            <img
              src={currentUser?.photoURL as string}
              className="header__account__image"
            />
            <div onClick={signOut}>
              <ExitToApp fontSize="large" className="header__account__exit" />
            </div>
          </div>
        )}

        {currentUser == null && (
          <div
            className="header__sign_button"
            onClick={() => navigate('/auth/sign')}
          >
            <Button variant={'tertiary'}>Sign in</Button>
          </div>
        )}
      </div>
    </div>
  )
}
