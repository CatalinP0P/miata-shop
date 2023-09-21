import React, { useState } from 'react'
import Button from 'components/ui/button/button'
import FormNumberInput from 'components/forms/formNumberInput/formNumberInput'

export default function AddToCart({ productSlug }: { productSlug: string }) {
  const [value, setValue] = useState(1)
  console.log(productSlug)

  return (
    <div className="product__header__buy">
      <FormNumberInput value={value} setValue={setValue} />
      <Button size="large">Add to cart</Button>
    </div>
  )
}
