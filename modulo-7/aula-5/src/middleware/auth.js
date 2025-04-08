const dotenv = require('dotenv')

dotenv.config()

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  if (token !== process.env.API_TOKEN) {
    return res.status(403).json({ message: 'Invalid Token' })
  }

  next();
}

module.exports = authenticateToken;