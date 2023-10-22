import api, { getAuthorizedApi } from 'utils/api'

export interface ReviewProps {
  imageURL: string
  text: string
  value: number
  user: {
    photoURL: string
    displayName: string
    email: string
  } | null
}

const getFromProduct = async (produtSlug: string) => {
  const response = await api.get('/reviews/' + produtSlug)
  return response.data
}

const deleteReview = async (id: string, token: string) => {
  const authorizedApi = getAuthorizedApi(token)
  const response = await authorizedApi.delete('/reviews/' + id)

  return response.data
}

const postReview = async ({
  productSlug,
  text,
  value,
  token,
}: {
  productSlug: string
  text: string
  value: number
  token: string
}) => {
  const authorizedApi = getAuthorizedApi(token)
  const response = await authorizedApi.post('/reviews', {
    productSlug,
    text,
    value,
  })

  return response.data
}

export default {
  getFromProduct,
  deleteReview,
  postReview,
}
