import app from '../utils/firebase-admin.cjs'

const authorization = async (req, res, next) => {
  const authorizationHeader = req.headers['authorization']

  if (authorizationHeader == null)
    return res.status(401).json('Missing Authorization Header')

  try {
    const decodedToken = await app.auth().verifyIdToken(authorizationHeader)
    req.user = decodedToken
    next()
  } catch (err) {
    return res.status(403).json('Unauthorized')
  }
}

export default authorization
