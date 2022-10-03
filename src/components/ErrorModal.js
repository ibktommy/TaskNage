import React from 'react'
import { useGlobalAppContext } from '../context/context'

const ErrorModal = () => {
  const { setError, setErrorMessage } = useGlobalAppContext()

  return (
    <div className="overlay">
      <div className="modal">
        <p className="text">
          Please fill in all input fields and select options!
        </p>
        <button onClick={() => setError(true)}>okay</button>
      </div>
    </div>
  )
}

export default ErrorModal