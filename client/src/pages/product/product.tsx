import Footer from 'components/layout/footer/footer'
import Header from 'components/layout/header/header'
import React, { useEffect } from 'react'
import './product.Module.scss'
import Separator from 'components/ui/separator/separator'
import AddToCart from './components/addToCart/addToCart'
import { useParams } from 'react-router-dom'
import useProduct from 'hooks/useProduct'
import RichText from 'components/ui/richText/richText'
import { Document } from '@contentful/rich-text-types'
import ProductReviews from './components/productReviews/productReviews'

export default function Product() {
  const { slug } = useParams()

  const { product, loading } = useProduct(slug + '')

  useEffect(() => {
    if (loading) return

    console.log(product?.fields.description)
  }, [loading])

  return (
    <>
      <Header />
      <div className="product__container">
        <div className="product__header">
          <div
            className="product__header__image"
            style={{
              backgroundImage: `url("${
                product?.fields.images
                  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ((product.fields.images as any).fields.file.url as string)
                  : ''
              }")`,
            }}
          ></div>
          <div className="product__header__body">
            <label className="product__header__title">
              {product?.fields.title as string}
            </label>

            <label className="product__header__generation">
              Fits: {product?.fields.generation as string}
            </label>

            <div className="product__header__price__area">
              <label className="product__header__price">$130</label>
              <label className="product__header__oldPrice">$140</label>
            </div>
            <Separator />
            <AddToCart productSlug="" />
          </div>
        </div>
        <div className="product__body">
          <div>
            <RichText content={product?.fields.description as Document} />
          </div>
          <ProductReviews productSlug={slug as string} />
        </div>
      </div>
      <Footer />
    </>
  )
}
