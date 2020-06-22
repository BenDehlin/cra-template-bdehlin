import { useState } from "react"

const useInput = (initialState) => {
  const [values, setValues] = useState(initialState)
  return [
    values,
    {
      setInput: (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        })
      },
      resetInputs: () => {
        setValues(initialState)
      }
    }

  ]
}

export default useInput