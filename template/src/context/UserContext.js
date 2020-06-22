import React, { useState, createContext } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [socket, setSocket] = useState(null)
  const {push} = useHistory()
  const login = (body) => {
    axios
      .post("/auth/login", body)
      .then(({ data }) => {
        setUser(data)
        push("/dashboard")
      })
      .catch(({ message }) => console.log(message))
  }
  const register = (body) => {
    axios
      .post("/auth/register", body)
      .then(({ data }) => setUser(data))
      .catch(({ message }) => console.log(message))
  }
  const logout = () => {
    axios
      .post("/auth/logout")
      .then(() => setUser(null))
      .catch(({ message }) => console.log(message))
  }
  const getUser = () => {
    axios
      .get("/auth/user")
      .then(({ data }) => setUser(data))
      .catch(({ message }) => console.log(message))
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        getUser,
        socket,
        setSocket,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
