import React from 'react'
import Categories from './components/categories/categories'
import Hero from './components/hero/hero'
import './home.Modules.scss'
import Generation from './components/generation/generation'

export default function Home() {
  return (
    <div className="home__container">
      <Hero />
      <Categories />
      <Generation />
    </div>
  )
}
