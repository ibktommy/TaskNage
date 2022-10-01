import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Setting Data-App-State
  const [data, setData] = useState([])
  const [checked, setChecked] = useState(false)


  // Function To Delete an Item from the Data-Array
  const deleteTaskItem = (id) => {
    const filteredTasks = data.filter((task) => task.id !== id)
    setData(filteredTasks)
  }

  // Function to Handle Checked-State
  const iconCheckHandler = () => {
    setChecked(!checked)
  }

  // Function to Get Data from localStorage


  return (
    <AppContext.Provider value={{
      data,
      checked,
      setData,
      setChecked,
      deleteTaskItem,
      iconCheckHandler,
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

