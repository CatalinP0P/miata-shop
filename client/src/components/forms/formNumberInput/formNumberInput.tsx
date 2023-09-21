import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React, { Dispatch, SetStateAction } from 'react'
import './formNumberInput.Module.scss'

interface FormNumberInputProps {
  value: number
  setValue: Dispatch<SetStateAction<number>>
  placeholder?: string
}

export default function FormNumberInput({
  value,
  setValue,
  placeholder,
}: FormNumberInputProps) {
  return (
    <div className="number__input__container">
      <label className="number__value">
        {value != null ? value : placeholder}
      </label>
      <div className="number__input__selector">
        <div
          className="number__input__button"
          onClick={() => setValue((oldValue: number) => oldValue + 1)}
        >
          <div className="number__input__button__icon">
            <KeyboardArrowUp />
          </div>
        </div>
        <div
          className="number__input__button"
          onClick={() => setValue((oldValue: number) => oldValue - 1)}
        >
          <div className="number__input__button__icon">
            <KeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}
