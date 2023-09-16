import React, { useRef } from 'react'
import './layout.Module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const layoutContainer = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className="layout__container"
      id="layout__container"
      ref={layoutContainer}
    >
      <div className="layout__container__body">{children}</div>
    </div>
  )
}
