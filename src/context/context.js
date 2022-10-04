import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
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

