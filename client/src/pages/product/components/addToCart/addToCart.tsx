import React, { useState } from 'react'
import Button from 'components/ui/button/button'
import FormNumberInput from 'components/forms/formNumberInput/formNumberInput'
import { useCart } from 'context/cartContext'

export default function AddToCart({ productSlug }: { productSlug: string }) {
  const [value, setValue] = useState(1)
  const { addProductToCart } = useCart()

  return (
    <div className="product__header__buy">
      <FormNumberInput value={value} setValue={setValue} />
      <Button
        size="large"
        onClick={() => addProductToCart({ slug: productSlug, quantity: value })}
      >
        Add to cart
      </Button>
    </div>
  )
}
