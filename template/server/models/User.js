const Sequelize = require('sequelize')
const db = require('../config/database')

const User = db.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  is_admin: {
    type: Sequelize.BOOLEAN
  },
})
User.prototype.noPassword = function() {
  const values = {...this.get()}
  delete values.password
  return values
}

module.exports = User