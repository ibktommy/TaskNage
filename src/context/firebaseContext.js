import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

const FirebaseContext = React.createContext()

const FirebaseContextProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [firebaseError, setFirebaseError] = useState('')
  const [taskData, setTaskData] = useState([])

  // Function To Register Users
  const register = async (email, password, confirmPassword) => {
    await createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    try {
      await setDoc(doc(db, 'users', email), { tasklist: [], })
    } catch (error) {
      console.log(error.message)
    }
  }

  // Function To Login User Details
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  // Function To Logout User
  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
  })

  // Fetching Data From Firebase Cloud Firestore
  useEffect(() => {
    if (user?.email) {
      try {
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
          setTaskData(doc.data().taskList)
        })
      } catch (error) {
        console.log(error.message)
      }
    }
  }, [user?.email])


  return (
    <FirebaseContext.Provider value={{
      user,
      firebaseError,
      setFirebaseError,
      register,
      login,
      logout,
      taskData,
      setTaskData,
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



