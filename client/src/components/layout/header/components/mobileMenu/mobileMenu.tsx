import React, { useEffect, useState } from 'react'
import Button from 'components/ui/button/button'
import './mobileMenu.Module.scss'
import { CloseRounded, ExitToApp, MenuRounded } from '@mui/icons-material'
import { mobileLinks } from 'static/links'
import UserCard from 'components/ui/userCard/userCard'
import { useAuth } from 'context/authContext'

export default function MobileMenu() {
  const { currentUser, signOut } = useAuth()
  const [visibility, setVisibility] = useState(false)
  const [selectedLink, setSelectedLink] = useState<string | null>(null)

  useEffect(() => {
    if (visibility) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
  }, [visibility])

  return (
    <>
      <div
        className="mobile__menu__button"
        onClick={() => setVisibility(!visibility)}
      >
        {visibility ? (
          <CloseRounded fontSize="large" />
        ) : (
          <MenuRounded fontSize="large" />
        )}
      </div>

      <div
        className={`mobile__menu__popup ${
          visibility ? 'mobile__menu__popup--active' : ''
        }`}
      >
        {mobileLinks.map((link) => {
          return (
            <label
              key={link.title}
              onClick={() => {
                setSelectedLink(link.path)
                setTimeout(() => {
                  window.location.href = link.path
                }, 350)
              }}
              className={
                'mobile__menu__link ' +
                (visibility ? 'animate' : '') +
                ' ' +
                (link.path == selectedLink ? ' selected' : '')
              }
            >
              {link.title}
            </label>
          )
        })}
        {currentUser != null && (
          <div
            className={
              'mobile__menu__popup__account ' +
              (visibility ? 'slide--bottom' : '')
            }
          >
            <UserCard size="large" user={currentUser} />
            <div className="mobile__menu__popup__signout" onClick={signOut}>
              <ExitToApp fontSize="inherit" />
            </div>
          </div>
        )}

        {currentUser == null && (
          <div className="mobile__menu__popup__signin">
            <Button
              onClick={() => (window.location.href = '/auth/sign')}
              size="large"
            >
              Sign in
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
