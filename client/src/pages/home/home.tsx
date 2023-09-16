import React from 'react'
import Categories from './components/categories/categories'
import Hero from './components/hero/hero'
import './home.Modules.scss'
import Generation from './components/generation/generation'
import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'

export default function Home() {
  return (
    <>
      <Header />

      <div className="home__container">
        <Hero />
        <Categories />
        <Generation />
      </div>

      <Footer />
    </>
  )
}
