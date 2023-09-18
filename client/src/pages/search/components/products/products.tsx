import useProducts from 'hooks/useProducts'
import React, { useEffect } from 'react'
import { FilterProps } from 'types/filter'
import Separator from 'components/ui/separator/separator'
import ProductCard from 'components/ui/productCard/productCard'
import './products.Module.scss'

export default function Products() {
  const getFiltersFromURL = () => {
    const searchParams = new URLSearchParams(window.location.search)

    let filters: FilterProps = {
      q: null,
      category: null,
      minPrice: null,
      maxPrice: null,
      generation: null,
    }

    Object.keys(filters).forEach((key) => {
      const value = searchParams.get(key)
      filters = { ...filters, [key]: value }
    })

    return filters
  }

  const { products, loading } = useProducts(getFiltersFromURL())

  useEffect(() => {
    if (loading) return
    console.log(products)
  }, [loading])

  useEffect(() => {
    getFiltersFromURL()
  }, [])

  return (
    <div className="products__container">
      <label className="products__title">
        {products?.length} {products?.length === 1 ? 'Product ' : 'Products '}
        Found
      </label>
      <Separator />
      <div className="products__body">
        {products?.map((product) => {
          return <ProductCard key={Math.random() * 1000} product={product} />
        })}
      </div>
    </div>
  )
}
