import React, { useState, createContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import io from "socket.io-client"

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [socket, setSocket] = useState(null)
  const { push } = useHistory()
  console.log(user)
  useEffect(() => {
    user ? setSocket(io.connect("http://localhost:3333")) : socket && socket.disconnect()
  }, [user, setSocket])
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
      .then(({ data }) => {
        setUser(data)
        push("/dashboard")
      })
      .catch(({ message }) => console.log(message))
  }
  const logout = () => {
    axios
      .post("/auth/logout")
      .then(() => {
        setUser(null)
        console.log("hit")
        push("/")
      })
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
