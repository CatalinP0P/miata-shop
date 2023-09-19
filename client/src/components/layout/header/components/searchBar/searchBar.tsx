import React, { useState } from 'react'
import { Close, Search } from '@mui/icons-material'
import './searchBar.Module.scss'

export default function SearchBar() {
  const [value, setValue] = useState('')

  const searchProduct = () => {
    window.location.href = '/search?q=' + value
  }

  return (
    <div className="header__search">
      <div className="header__search__icon" onClick={searchProduct}>
        <Search />
      </div>
      <input
        placeholder="Search for a Product"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            searchProduct()
          }
        }}
        className="header__search__input"
      />
      {value && (
        <div onClick={() => setValue('')} className="header__search__icon">
          <Close />
        </div>
      )}
    </div>
  )
}
