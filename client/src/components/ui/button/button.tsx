import React, { ButtonHTMLAttributes } from 'react'
import './button.Module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'tertiary' | 'primary' | 'secondary'
}

export default function Button({
  variant = 'primary',
  children,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <button className={`button button-${variant} ${className}`} {...otherProps}>
      {children}
    </button>
  )
}
