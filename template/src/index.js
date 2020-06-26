import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { HashRouter as Router } from "react-router-dom"
import { UserProvider } from "./context/UserContext"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
