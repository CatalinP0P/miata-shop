import React, { useState } from 'react'
import { ExitToApp, ShoppingCart } from '@mui/icons-material'
import firebase from 'firebase/compat'
import UserCard from 'components/ui/userCard/userCard'
import './loggedUserCard.Module.scss'
import { useAuth } from 'context/authContext'
import { useNavigate } from 'react-router-dom'

export default function LoggedUserCard({
  currentUser,
}: {
  currentUser: firebase.User
}) {
  const [visible, setVisible] = useState<boolean>(false)
  const { signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      {visible && (
        <div className="overlay" onClick={() => setVisible(false)}></div>
      )}
      <div
        className="user__card"
        onClick={() => setVisible(!visible)}
        data-testid="account_card"
      >
        <UserCard user={currentUser} />
        {visible && (
          <div className="user__popup" onClick={(e) => e.stopPropagation()}>
            <div onClick={signOut} className="user__popup__link">
              <label>Exit</label>
              <ExitToApp fontSize="inherit" />
            </div>
            <div
              className="user__popup__link"
              onClick={() => navigate('/my-orders')}
            >
              <label>My Orders</label>
              <ShoppingCart fontSize="inherit" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
