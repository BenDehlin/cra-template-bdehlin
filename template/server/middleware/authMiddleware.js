module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send("User not logged in")
    }
    next()
  },
  adminsOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send("User not logged in")
    }
    if (!req.session.user.is_admin) {
      return res.status(403).send("User is not an admin")
    }
    next()
  }
}