const jwt = require('jsonwebtoken');

const authenticateUser = (roles) => {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      req.user = decoded;
      next();
    });
  };
};

module.exports = authenticateUser;
