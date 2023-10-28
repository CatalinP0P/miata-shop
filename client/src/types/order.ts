export interface ProductProps {
  slug: string
  quantity: number
}

export interface AddressProps {
  city: string
  country: string
  line1: string
  line2: string
  postal_code: string
  state: string
}

export interface OrderProps {
  _id: string
  userId: string
  customer_details: {
    address: AddressProps
    email: string
    name: string
    phone: string
  }
  shipping_details: {
    address: AddressProps
    name: string
  }
  amount: number
  products: ProductProps[]
  stripe_session: string
  created_at: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
}
