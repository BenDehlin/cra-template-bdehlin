This utility is for setting up the boilerplate for a react app using the following:
  -express
  -express-session
  -socket.io
  -bcryptjs
  -axios
  -context api
  -react-router-dom
  -formik
  -material-ui
  -sequelize

  User data is stored in context but redux is included for those that may be using it. Current build uses formik and material-ui
  for the forms on the Login and Register component.

  Database connection has been migrated to use Sequelize ORM instead of massive direct connection, manually creating sql files has been deprecated.