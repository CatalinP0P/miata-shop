import Stripe from 'stripe'
import express from 'express'
import productController from '../controllers/productController.js'

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
  const cartItems = req.body.cartItems
  console.log(cartItems)
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
            id: product.fields.slug,
          },
        },
        unit_amount: product.fields.price * 100,
      },
      quantity: cartItems.find((m) => m.slug === product.fields.slug).quantity,
    }
  })

  console.log(
    'products,',
    line_items.map((item) => item.price_data.product_data),
  )

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

  // res.redirect(303, session.url);
  res.send({ url: session.url })
})

export default router
