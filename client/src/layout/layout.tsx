import React, { useRef } from 'react'
import Header from 'components/layout/header/header'
import './layout.Module.scss'
import Footer from 'components/layout/footer/footer'

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
      <Header />
      <div className="layout__container__body">{children}</div>
      <Footer layoutContainer={layoutContainer} />
    </div>
  )
}
