import { OrderProps } from 'types/order'
import { getAuthorizedApi } from 'utils/api'

export const processOrder = (sessionId: string, authToken: string) => {
  const api = getAuthorizedApi(authToken)
  api
    .post('/order/process/' + sessionId)
    .then(() => {
      //   console.log(response.data)
    })
    .catch(() => {
      //   console.log(err.response)
    })
}

export const getOrdersFromUserId = async (authToken: string) => {
  const api = getAuthorizedApi(authToken)
  try {
    const response = await api.get('/order/')
    return response.data as OrderProps[]
  } catch {
    return []
  }
}
