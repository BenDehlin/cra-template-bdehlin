const bcrypt = require("bcryptjs")

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db")
    const { username, email, password} = req.body
    const emailResult = await db.auth.get_user_email(email)
    if (emailResult[0]) {
      return res.status(409).send("Email already registered")
    }
    const usernameResult = await db.auth.get_user_username(username)
    if (usernameResult[0]) {
      return res.status(409).send("Username taken")
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const user = await db.auth.register_user({
      username,
      email,
      password: hash
    })
    delete user[0].password
    req.session.user = user[0]
    return res.status(200).send(req.session.user)
  },
  login: async (req, res) => {
    const db = req.app.get("db")
    const { username, password } = req.body
    const result = await db.auth.get_user_username(username)
    const user = result[0]
    if (!user) {
      return res.status(401).send("User not found.")
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password)
    if (!isAuthenticated) {
      return res.status(403).send("Incorrect Password.")
    }
    delete user.password
    req.session.user = user
    return res.status(200).send(req.session.user)
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getUser: (req, res) => {
    if (!req.session.user) {
      return res.status(401).send("User not found.")
    }
    res.status(200).send(req.session.user)
  }
}
