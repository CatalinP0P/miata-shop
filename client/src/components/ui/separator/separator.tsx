import React from 'react'
import './separator.Module.scss'

interface SeparatorProps {
  title?: string
}

export default function Separator({ title }: SeparatorProps) {
  return (
    <label className={'separator ' + (title ? 'separator--title' : '')}>
      {title}
    </label>
  )
}
