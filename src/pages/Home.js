import React from 'react'
import { useGlobalAppContext } from '../context/context'
import ErrorModal from '../components/ErrorModal'
import Inputs from '../components/Inputs'
import TaskList from '../components/TaskList'


const Home = () => {
  // Get Data-State from the App Context
  const { data, error } = useGlobalAppContext()
  return (
    <>
      {!error && <ErrorModal />
      }
      <h2>
        <span>Tasknage</span>
        <span>Your Personal Task-Manager Web App</span>
      </h2>

      <Inputs />

      {/* Display TaskList Component only when we have tasks submitted */}
      {data.length > 0 && <TaskList data={data} />}

    </>
  )
}

export default Home