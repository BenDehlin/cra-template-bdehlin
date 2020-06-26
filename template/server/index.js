// dotenv, express, express-session, socket.io
// Environment Variables
require("dotenv").config({ path: __dirname + "/../.env" })
const { SERVER_PORT, SESSION_SECRET } = process.env

// Server
const app = require("express")()

// Controllers
const authCtrl = require("./controllers/authController")

// Middleware
const authMid = require("./middleware/authMiddleware")
app.use(require("express").json())
app.use(
  require("express-session")({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
)

// Models
app.set("User", require("./models/User"))

// Database connection
require("./config/database")
  .authenticate()
  .then(() => {
    console.log("Connection Established")
    const io = require("socket.io")(
      app.listen(SERVER_PORT, console.log(`Server listening on ${SERVER_PORT}`))
    )
    app.set("io", io)
    io.on("connection", (socket) => {
      console.log(`${socket.id} connected`)
      socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`)
      })
    })
  })
  .catch((err) => console.log(err))

// Endpoints
// Auth Endpoints
app.post("/auth/register", authCtrl.register)
app.post("/auth/login", authCtrl.login)
app.post("/auth/logout", authCtrl.logout)
app.get("/auth/user", authMid.usersOnly, authCtrl.getUser)
