import React from 'react'
import { Navigate } from 'react-router-dom'
import { useFirebaseContext } from '../context/firebaseContext'

const PrivateRoute = ({ children }) => {
  const { user } = useFirebaseContext()

  // Condition to check if user has logged in
  if (!user.email) {
    return <Navigate to='/register' />
  } else {
    return children
  }
}

export default PrivateRoute