import React from 'react'

const ErrorModal = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <p className="text">
          Please input an item!
        </p>
        <button>okay</button>
      </div>
    </div>
  )
}

export default ErrorModal