import React, { useContext } from 'react'
import { auth, db } from '../firebase'

const FirebaseContext = React.createContext()

const FirebaseContextProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={'Hello'}>
      {children}
    </FirebaseContext.Provider>
  )
}

// Create Custom Hook for Context
export const useFirebaseContext = () => {
  return useContext(FirebaseContext)
}

export { FirebaseContext, FirebaseContextProvider }



