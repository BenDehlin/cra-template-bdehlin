import React, { useContext } from "react"
import useInput from "../hooks/useInput"
import { UserContext } from "../context/UserContext"

const Register = () => {
  const { register } = useContext(UserContext)
  const [{ username, email, password }, setInput] = useInput({
    username: "",
    email: "",
    password: "",
  })
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          register({ username, email, password })
        }}
      >
        <input name="username" value={username} onChange={setInput} />
        <input name="email" value={email} onChange={setInput} />
        <input
          name="password"
          type="password"
          value={password}
          onChange={setInput}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
