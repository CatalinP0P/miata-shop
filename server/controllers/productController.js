import client from '../utils/contentful.js'

const getAll = async () => {
  const body = {
    content_type: 'miataShopProduct',
  }
  const products = await client.getEntries(body)
  return products.items
}

const getBySlug = async (slug) => {
  const body = {
    content_type: 'miataShopProduct',
    'fields.slug': slug,
  }

  const data = await client.getEntries(body)
  return data.items[0]
}

const getBySlugArray = async (slugs) => {
  const body = {
    content_type: 'miataShopProduct',
    'fields.slug[in]': slugs,
  }

  const data = await client.getEntries(body)
  return data.items
}

export default {
  getAll,
  getBySlug,
  getBySlugArray,
}
