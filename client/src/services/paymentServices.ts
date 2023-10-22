import api from 'utils/api'

const checkoutProducts = async (
  cartItems: { slug: string; quantity: number }[],
) => {
  const response = await api.post(
    process.env.REACT_APP_SERVER_URL + 'stripe/create-checkout-session',
    {
      cartItems,
    },
  )
  window.location.href = response.data.url
}

export default {
  checkoutProducts,
}
