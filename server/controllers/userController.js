import app from '../utils/firebase-admin.cjs'

const auth = app.auth()

const getUserDetails = async (id) => {
  const user = await auth.getUser(id)
  return user
}

export default {
  getUserDetails,
}
