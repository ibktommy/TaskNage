import React, { useEffect, useState } from 'react'
import { useGlobalAppContext } from '../context/context'
import ErrorModal from '../components/ErrorModal'
import Inputs from '../components/Inputs'
import TaskList from '../components/TaskList'
import Header from '../components/Header'
import { useFirebaseContext } from '../context/firebaseContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

const Home = () => {
  // Get Error-State from the App Context
  const { error } = useGlobalAppContext()
  const [data, setData] = useState([])
  const { user } = useFirebaseContext()

  // Fetching Data from Firebase Firestore
  useEffect(() => {
    if (user.email) {
      onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setData(doc.data().taskList)
      })
    }
  }, [user.email])

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