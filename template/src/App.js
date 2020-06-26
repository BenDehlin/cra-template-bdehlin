import React, { useContext, useEffect } from "react"
import routes from "./routes"
import Header from './Components/Header'
import { UserContext } from "./context/UserContext"

function App() {
  const {getUser} = useContext(UserContext)
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      <Header />
      {routes}
    </div>
  )
}

export default App
