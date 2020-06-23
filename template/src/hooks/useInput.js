import { useState } from "react"

const useInput = (initialState) => {
  const [values, setValues] = useState(initialState)
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
    },
    () => {
      setValues(initialState)
    },
  ]
}

export default useInput