import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Function to Get Data from localStorage
  const getDataInLocalStorage = () => {
    let dataStorage = localStorage.getItem('tasks')

    if (dataStorage) {
      return JSON.parse(localStorage.getItem('tasks'))
    } else {
      return []
    }
  }
  // Setting Data-App-State
  const [data, setData] = useState(getDataInLocalStorage())

  return (
    <AppContext.Provider value={{
      data,
      setData,
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

