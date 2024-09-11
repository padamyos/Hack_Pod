// authMiddleware.js
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied' });
    }
    next();
  };
  
  module.exports = {
    isAdmin
  };