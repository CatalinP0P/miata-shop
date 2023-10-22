import Stripe from 'stripe'
import productController from './productController.js'
import dotenv from 'dotenv'
dotenv.config()

const stripe = Stripe(process.env.STRIPE_KEY)

export const createStripeSession = async (cartItems) => {
  const itemSlugs = cartItems.map((item) => {
    return item.slug
  })

  const products = await productController.getBySlugArray(itemSlugs)

  const line_items = products.map((product) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.fields.title,
          images: ['https:' + product.fields.images.fields.file.url],
          description: product.fields.title + ' ' + product.fields.category,
          metadata: {
            slug: product.fields.slug,
          },
        },
        unit_amount: product.fields.price * 100,
      },
      quantity: cartItems.find((m) => m.slug === product.fields.slug).quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'KE', 'RO'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items: line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/`,
  })

  return session
}

export const getSessionDetails = async (sessionId) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: [
        'line_items',
        'line_items.data',
        'line_items.data.price.product',
      ],
    })
    return session
  } catch (error) {
    return null
  }
}

export const getProductsFromSession = async (sessionId) => {
  try {
    const session = await getSessionDetails(sessionId)
    const lineItems = session.display_items || session.line_items

    const items = lineItems.data.map((item) => {
      return { slug: item.price.product.metadata.slug, quantity: item.quantity }
    })

    return items
  } catch {
    return null
  }
}

export const getAddressFromSession = async (sessionId) => {
  try {
    const session = await getSessionDetails(sessionId)
    return {
      customer_details: session.customer_details,
      shipping_details: session.shipping_details,
    }
  } catch {
    return null
  }
}
