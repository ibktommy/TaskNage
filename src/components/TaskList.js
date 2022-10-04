import React from 'react'
import TaskItem from './TaskItem';
import UserName from './UserName';
import currentDate from '../utils/Date';
import { useFirebaseContext } from '../context/firebaseContext';
import { useNavigate } from 'react-router-dom';

const TaskList = ({ data, onDelete }) => {
  const { logout } = useFirebaseContext()
  const navigate = useNavigate()

  // Logout User Handler
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="tasklist animate__animated animate__fadeInUp">
      <UserName />
      <p className="para">
        Let's be productive today
      </p>
      <p className="date">
        Today, {currentDate}
      </p>

      {data.map((dataItem, id) => {
        return (
          <TaskItem key={id} {...dataItem} onDelete={onDelete} />
        )
      })}

      <button className='logout-btn' onClick={handleLogout}>
        Log Out
      </button>
    </div>
  )
}

export default TaskList