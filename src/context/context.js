import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // Setting Data-App-State
  const [data, setData] = useState([])


  // Function To Get Data Prop From Input-Child-Component
  // const getTaskData = (newTaskData) => {
  //   setData([...data, newTaskData])
  // }

  // Function To Delete an Item from the Data-Array
  const deleteTaskItem = (id) => {
    const filteredTasks = data.filter((task) => task.id !== id)
    setData(filteredTasks)
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

