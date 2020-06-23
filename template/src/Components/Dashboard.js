import React from "react"
import useAuth from "../hooks/useAuth"

const Dashboard = () => {
  useAuth()
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
