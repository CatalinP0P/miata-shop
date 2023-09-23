import React from 'react'
import './separator.Module.scss'

interface SeparatorProps {
  title?: string
  variant?: 'lined' | 'dotted'
}

export default function Separator({
  title,
  variant = 'lined',
}: SeparatorProps) {
  return (
    <label
      className={
        'separator ' +
        (title ? 'separator--title' : '') +
        ` separator--variant--${variant}`
      }
    >
      {title}
    </label>
  )
}
