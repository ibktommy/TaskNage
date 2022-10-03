import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'



const FirebaseContext = React.createContext()

const FirebaseContextProvider = ({ children }) => {
  const [user, setUser] = useState([])

  // Function To Register Users
  const register = async (email, password, confirmPassword) => {
    await createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    try {
      await setDoc(doc(db, 'users', email), { tasklist: [], })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
  })


  return (
    <FirebaseContext.Provider value={{
      register,
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}

// Create Custom Hook for Context
export const useFirebaseContext = () => {
  return useContext(FirebaseContext)
}

export { FirebaseContext, FirebaseContextProvider }



