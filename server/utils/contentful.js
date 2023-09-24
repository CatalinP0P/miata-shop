import contentful from 'contentful'
import dotenv from 'dotenv'
dotenv.config()

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export default client
