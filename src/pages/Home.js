import React from 'react'
import { useGlobalAppContext } from '../context/context'
import ErrorModal from '../components/ErrorModal'
import Inputs from '../components/Inputs'
import TaskList from '../components/TaskList'
import Header from '../components/Header'
import { useFirebaseContext } from '../context/firebaseContext'


const Home = () => {
  // Get Error-State from the App Context
  const { error } = useGlobalAppContext()

  // Get Data-State from the Firebase Context
  const { taskData } = useFirebaseContext()

  return (
    <>
      {!error && <ErrorModal />
      }

      <Header />

      <Inputs />

      {/* Display TaskList Component only when we have tasks submitted */}
      {taskData.length > 0 && <TaskList taskData={taskData} />}

    </>
  )
}

export default Home