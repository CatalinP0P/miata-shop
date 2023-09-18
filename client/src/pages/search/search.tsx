import React from 'react'
import FilterSelector from './components/filterSelector/filterSelector'
import Header from 'components/layout/header/header'
import Footer from 'components/layout/footer/footer'
import './search.Module.scss'
import Products from './components/products/products'

export default function Search() {
  return (
    <>
      <Header />
      <div className="search__container">
        <FilterSelector />
        <Products />
      </div>
      <Footer />
    </>
  )
}
