import React from 'react'
import { useGlobalAppContext } from '../context/context'
import ErrorModal from '../components/ErrorModal'
import Inputs from '../components/Inputs'
import TaskList from '../components/TaskList'
import Header from '../components/Header'


const Home = () => {
  // Get Data-State from the App Context
  const { data, error } = useGlobalAppContext()
  return (
    <>
      {!error && <ErrorModal />
      }

      <Header />

      <Inputs />

      {/* Display TaskList Component only when we have tasks submitted */}
      {data.length > 0 && <TaskList data={data} />}

    </>
  )
}

export default Home