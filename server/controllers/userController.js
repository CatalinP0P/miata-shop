import app from '../utils/firebase-admin.js'

const auth = app.auth()

const getUserDetails = async (id) => {
  const user = await auth.getUser(id)
  return user
}

export default {
  getUserDetails,
}
