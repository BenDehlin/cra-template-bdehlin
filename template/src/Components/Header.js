import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import {Button} from '@material-ui/core'

const Header = () => {
  const { push } = useHistory()
  const { user, logout } = useContext(UserContext)
  return (
    <header>
      {user ? (
        <nav>
          <Button onClick={() => push("/dashboard")}>Dashboard</Button>
          <Button onClick={logout}>Logout</Button>
        </nav>
      ) : (
        <nav>
          <Button onClick={() => push("/")}>Login</Button>
          <Button onClick={() => push("/register")}>Register</Button>
        </nav>
      )}
    </header>
  )
}

export default Header
