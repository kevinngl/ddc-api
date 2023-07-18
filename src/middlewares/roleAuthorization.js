// Middleware to check if user has the required role for the route
module.exports = function authorize(role) {
  return (req, res, next) => {
    // Check if user has a role
    if (!req.user.role) {
      return res.status(401).json({ msg: 'User has no role, authorization denied' });
    }

    // Check if user has the required role
    if (req.user.role.name !== role || role.includes(req.user.role.name) === false) {
      return res.status(403).json({ msg: 'User does not have the required role, authorization denied' });
    }

    next();
  };
};
