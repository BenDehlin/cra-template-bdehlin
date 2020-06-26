const { hashSync, genSaltSync, compareSync } = require("bcryptjs")
module.exports = {
  register: async (req, res) => {
    const User = req.app.get("User")
    const { username, email, password } = req.body
    if (await User.findOne({ where: { email } })) {
      return res.status(409).send("Email already registered.")
    }
    if (await User.findOne({ where: { username } })) {
      return res.status(409).send("Username taken.")
    }
    User.create({
      username,
      email,
      password: hashSync(password, genSaltSync(10)),
      is_admin: false,
    })
      .then((user) => {
        req.session.user = user.noPassword()
        res.status(200).send(req.session.user)
      })
      .catch((err) => res.status(500).send(err))
  },
  login: async (req, res) => {
    const User = req.app.get("User")
    const { username, password } = req.body
    User.findOne({ where: { username } })
      .then((user) => {
        if (!user) {
          return res.status(401).send("User not found.")
        }
        if (!compareSync(password, user.password)) {
          return res.status(403).send("Incorrect Password.")
        }
        req.session.user = user.noPassword()
        res.status(200).send(req.session.user)
      })
      .catch((err) => res.status(500).send(err))
  },
  logout: async (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getUser: async (req, res) => {
    if (!req.session.user) {
      return res.status(401).send("User not logged in.")
    }
    res.status(200).send(req.session.user)
  },
}
