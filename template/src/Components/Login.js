import React, {useContext} from "react"
import useInput from "../hooks/useInput"
import {UserContext} from '../context/UserContext'

const Login = () => {
    const {login} = useContext(UserContext)
  const [{ username, password }, {setInput}] = useInput({
    username: "",
    password: "",
  })
  return (
    <div>
      <form
        onSubmit={(e) => {
            e.preventDefault()
            login({username, password})
        }}
      >
        <input name="username" value={username} onChange={setInput} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={setInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
