const jwt = require('jsonwebtoken')
const config = require('../../../config')
const message = require('../../../message')
module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (token) {

    jwt.verify(token, config.USER_JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(401)
          .json({ 
            status: false,
            message: message.error, 
            error: message.unauth_access 
          });
      }
      req.body = Object.assign(req.body, { user_id: decoded.id })
      next();
    });
  } else {
    return res.status(403).send({
      status: false,
      message: message.error,
      error: message.no_token
    });
  }
}