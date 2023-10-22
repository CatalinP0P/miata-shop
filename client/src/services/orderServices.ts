import api from 'utils/api'

export const processOrder = (sessionId: string) => {
  api
    .post('/order/process/' + sessionId)
    .then(() => {
      //   console.log(response.data)
    })
    .catch(() => {
      //   console.log(err.response)
    })
}
