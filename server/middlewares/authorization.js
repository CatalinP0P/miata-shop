import app from '../utils/firebase-admin.js';

const authorization = async (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  if (authorizationHeader == null)
    return res.status(401).json('Missing Authorization Header');

  console.log(authorizationHeader);

  try {
    const decodedToken = await app.auth().verifyIdToken(authorizationHeader);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json('Unauthorized');
  }
};

export default authorization;
