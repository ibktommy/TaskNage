import React, { useEffect, useState } from 'react'
import { useGlobalAppContext } from '../context/context'
import Inputs from '../components/Inputs'
import TaskList from '../components/TaskList'
import Header from '../components/Header'
import { useFirebaseContext } from '../context/firebaseContext'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const Home = () => {
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

  // Function To Delete TaskItem from Firebase Firestore
  let dataRef = doc(db, 'users', `${user.email}`)
  const deleteItem = async (id) => {
    try {
      const newTaskList = data.filter((item) => item.id !== id)
      await updateDoc(dataRef, { taskList: newTaskList })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='animate__animated animate__zoomIn'>
      <Header />

      <Inputs />

      {/* Display TaskList Component only when we have tasks submitted */}
      {data.length > 0 && <TaskList data={data} onDelete={deleteItem}/>}

    </div>
  )
}

export default Home