import React from 'react'
import './hero.Module.scss'
import miatasImage from 'assets/miatas.jpeg'

export default function Hero() {
  return (
    <div className="hero__container">
      <img className="hero__image" src={miatasImage} />
      <label className="hero__text">
        Quality <span>Miata</span> Parts & Mods
      </label>
    </div>
  )
}
