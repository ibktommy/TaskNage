import React from 'react'

const ErrorModal = () => {

  return (
    <div className="overlay">
      <div className="modal">
        <p className="text">
          Please fill in all input fields and select options!
        </p>
        <button>okay</button>
      </div>
    </div>
  )
}

export default ErrorModal