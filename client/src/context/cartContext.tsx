import React, { createContext, useContext, useEffect, useState } from 'react'

interface CartItemProps {
  slug: string
  quantity: number
}

interface CartContextProps {
  loading: boolean
  products: CartItemProps[] | null
  addProductToCart: (product: CartItemProps) => void
  removeFromCart: (productSlug: string) => void
}

const CartContext = createContext<CartContextProps>({
  loading: true,
  products: null,
  addProductToCart: () => {},
  removeFromCart: () => {},
})

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartItemProps[] | null>(null)
  const [loading, setLoading] = useState(true)

  const getCartFromLocal = () => {
    const cart =
      JSON.parse(localStorage.getItem('miata-shop-cart') + '') || null
    setProducts(cart as CartItemProps[] | null)

    if (loading) setLoading(false)
  }

  const saveToLocalStorage = (products: CartItemProps[]) => {
    localStorage.setItem('miata-shop-cart', JSON.stringify(products))
  }

  const removeFromCart = (productSlug: string) => {
    let newProducts = products?.map((product: CartItemProps) => {
      return product.slug == productSlug
        ? { ...product, quantity: product.quantity - 1 }
        : product
    })

    newProducts = newProducts?.filter((m) => m.quantity > 0)

    saveToLocalStorage(newProducts as CartItemProps[])
    setProducts(newProducts as CartItemProps[])
  }

  console.log(saveToLocalStorage)

  const addProductToCart = (product: CartItemProps) => {
    if (products?.find((m: CartItemProps) => m.slug == product.slug)) {
      const newProducts = products.map((m: CartItemProps) => {
        if (m.slug == product.slug) {
          return { ...m, quantity: m.quantity + product.quantity }
        } else {
          return m
        }
      })

      setProducts(newProducts)
      saveToLocalStorage(newProducts)
      getCartFromLocal()
    } else {
      const newProducts = products
        ? [...products, { ...product }]
        : [{ ...product }]

      setProducts(newProducts)
      saveToLocalStorage(newProducts)
      getCartFromLocal()
    }
  }

  useEffect(() => {
    getCartFromLocal()
  }, [])

  return (
    <CartContext.Provider
      value={{ products, loading, addProductToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
