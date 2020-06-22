import { useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const useAuth = () => {
  const {user} = useContext(UserContext)
  const { push } = useHistory()
  useEffect(() => {
    if (!user) {
      push("/")
    } 
  }, [user])
}

export default useAuth