import React, { useState } from 'react'
import './select.Module.scss'
import { KeyboardArrowUp } from '@mui/icons-material'

interface SelectProps {
  options: string[] | null
  value: string | null
  setValue: (value: string) => void
  title?: string
}

export default function Select({
  value,
  setValue,
  options,
  title,
}: SelectProps) {
  const [visibility, setVisibility] = useState(false)

  return (
    <div className="select__container">
      {title && <label className="select__label">{title}</label>}
      <div className="select__value" onClick={() => setVisibility(!visibility)}>
        {value != 'null' ? value : 'Select ' + (title ? title : '')}
        <KeyboardArrowUp
          className={`select__value__icon select__value__icon--${
            visibility ? 'up' : 'down'
          }`}
        />
      </div>
      <div
        className={
          'select__options ' + (visibility ? ' select__options--visible' : '')
        }
      >
        {options?.map((option: string) => {
          return (
            <label
              key={option}
              className="select__option__item"
              onClick={() => {
                setValue(option)
                setVisibility(false)
              }}
            >
              {option}
            </label>
          )
        })}
      </div>
      {visibility && (
        <div
          onClick={() => setVisibility(false)}
          className="overlay--transparent"
        />
      )}
    </div>
  )
}
