import React, { useEffect, useRef } from 'react'
import './footer.Module.scss'
import { Facebook, Instagram } from '@mui/icons-material'

interface FooterProps {
  layoutContainer: React.MutableRefObject<HTMLDivElement | null>
}

export default function Footer({ layoutContainer }: FooterProps) {
  const footerContainerRef = useRef<HTMLDivElement | null>(null)

  const handleResize = () => {
    if (layoutContainer.current) {
      layoutContainer.current.style.marginBottom =
        footerContainerRef.current?.clientHeight + 'px'
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="footer__container" ref={footerContainerRef}>
      <div className="footer__body">
        <div className="footer__body__item">
          <label className="footer__name">Miata Shop</label>
        </div>
        <div className="footer__body__item">
          <label className="footer__item__title">Contact US</label>
          <label className="footer__item__link">
            miata__shop
            <Instagram />
          </label>
          <label className="footer__item__link">
            Miata Shop
            <Facebook />
          </label>
        </div>
      </div>
      <div className="footer__footer">
        <label className="footer__copyright">© All Rights Reserved</label>
        <label className="footer__credits">
          built by <span>Catalin Pop.</span>
        </label>
      </div>
    </div>
  )
}
