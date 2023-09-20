import React from 'react'
import firebase from 'firebase/compat/app'
import './userCard.Module.scss'

export default function UserCard({
  user,
  size = 'normal',
}: {
  user: firebase.User
  size?: 'large' | 'normal'
}) {
  return (
    <div
      className={'user__card__container ' + `user__card__container--${size}`}
    >
      <div className="user__card__text__container">
        <label className="user__card__name">{user?.displayName}</label>
        <label className="user__card__email">{user?.email}</label>
      </div>

      <img src={user?.photoURL as string} className="user__card__image" />
    </div>
  )
}
