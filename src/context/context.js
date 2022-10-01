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


  // Function To Delete an Item from the Data-Array
  const deleteTaskItem = (id) => {
    // const filteredTasks = data.filter((task) => task.id !== id)
    // setData(filteredTasks)
    console.log(id)
  }

  return (
    <AppContext.Provider value={{
      data,
      setData,
      deleteTaskItem,
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

