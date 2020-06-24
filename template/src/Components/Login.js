import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Formik, Form, Field } from "formik"
import { Button, TextField } from "@material-ui/core"

const Login = () => {
  const { login } = useContext(UserContext)
  return (
    <Formik initialValues={{ username: "", password: "" }}>
      {({ values: { username, password } }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            login({ username, password })
          }}
        >
          <Field name="username" as={TextField} />
          <Field name="password" type="password" as={TextField} />
          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
  )
}

export default Login
