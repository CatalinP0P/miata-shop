import React, { ButtonHTMLAttributes } from 'react'
import './button.Module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'tertiary' | 'primary' | 'secondary'
  size?: 'medium' | 'small' | 'large'
}

export default function Button({
  variant = 'primary',
  children,
  size = 'medium',
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant} ${className} button--size--${size}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
