import React from 'react'
import TaskItem from './TaskItem';
import UserName from './UserName';
import currentDate from '../utils/Date';
import { useFirebaseContext } from '../context/firebaseContext';
import { useNavigate } from 'react-router-dom';

const TaskList = ({ taskData }) => {
  const { logout } = useFirebaseContext()
  const navigate = useNavigate()

  // Logout User Handler
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="tasklist">
      <UserName />
      <p className="para">
        Let's be productive today
      </p>
      <p className="date">
        Today, {currentDate}
      </p>

      {taskData.map((dataItem, id) => {
        return (
          <TaskItem key={id} {...dataItem} />
        )
      })}

      <button className='logout-btn' onClick={handleLogout}>
        Log Out
      </button>
    </div>
  )
}

export default TaskList