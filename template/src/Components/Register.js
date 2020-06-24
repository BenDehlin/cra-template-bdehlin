import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Formik, Form, Field } from "formik"
import { Button, TextField } from "@material-ui/core"

const Register = () => {
  const { register } = useContext(UserContext)
  return (
    <Formik initialValues={{ username: "", email: "", password: "" }}>
      {({ values: { username, email, password } }) => (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            register({ username, email, password })
          }}
        >
          <Field name="username" as={TextField} />
          <Field name="email" as={TextField} />
          <Field name="password" type="password" as={TextField} />
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  )
}

export default Register
