import { doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { useFirebaseContext } from './firebaseContext'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Function to Get Data from localStorage
  // const getDataInLocalStorage = () => {
  //   let dataStorage = localStorage.getItem('tasks')

  //   if (dataStorage) {
  //     return JSON.parse(localStorage.getItem('tasks'))
  //   } else {
  //     return []
  //   }
  // }

  // Error State
  const [error, setError] = useState(true)

  return (
    <AppContext.Provider value={{
      error,
      setError,
    }}>
      {children}
    </AppContext.Provider>
  )
}

// Create a Custom Context Hook
export const useGlobalAppContext = () => {
  return useContext(AppContext)
}

// Export AppContext and AppProvider
export { AppContext, AppProvider }

