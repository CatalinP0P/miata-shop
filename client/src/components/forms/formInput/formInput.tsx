import React, { InputHTMLAttributes } from 'react'
import './formInput.Module.scss'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export default function FormInput({ title, ...otherProps }: FormInputProps) {
  return (
    <div className="form__item">
      <label className="form__item__title">{title}</label>
      <input className="form__item__input" {...otherProps} />
    </div>
  )
}
