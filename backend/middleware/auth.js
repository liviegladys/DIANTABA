const jwt = require('jsonwebtoken');
const sercetCode = "qhdsddhqGLADYSd;sjkjhfdfbhdf";


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[24];
   const decodedToken = jwt.verify(token, sercetCode);
    const UserID = decodedToken.UserID;
    if (req.body.UserID && req.body.UserID !== UserID) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};