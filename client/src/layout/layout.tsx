import React from 'react'
import Header from 'components/layout/header/header'
import './layout.Module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout__container">
      <Header />
      <div className="layout__container__body">{children}</div>
    </div>
  )
}
