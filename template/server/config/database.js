require("dotenv").config({ path: __dirname + "/../.env" })
const Sequelize = require("sequelize")
const { CONNECTION_STRING } = process.env

module.exports = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
})