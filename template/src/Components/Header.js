import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Header = () => {
  const { push } = useHistory()
  const { user, logout } = useContext(UserContext)
  return (
    <header>
      {user ? (
        <nav>
          <button onClick={() => push("/dashboard")}>Dashboard</button>
          <button onClick={logout}>Logout</button>
        </nav>
      ) : (
        <nav>
          <button onClick={() => push("/")}>Login</button>
          <button onClick={() => push("/register")}>Register</button>
        </nav>
      )}
    </header>
  )
}

export default Header
