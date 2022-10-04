import React, { useCallback, useEffect, useState } from 'react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { useFirebaseContext } from '../context/firebaseContext'
import { styleButton } from '../utils/styleButton'
import { formatTime } from '../utils/Time'

const TaskItem = ({ name, date, time, priority, category, id }) => {
  const [checked, setChecked] = useState(false)

  const { taskData, setTaskData } = useFirebaseContext()

  const iconCheckHandler = useCallback((id) => {
    setChecked(true)
  }, [setChecked])

  // Deleting a TaskItem when the item has been checked
  useEffect(() => {
    if (checked) {
      let filteredTasks = taskData.filter((item) => item.id !== id)

      setTimeout(() => {
        setChecked(false)
        setTaskData(filteredTasks)
      }, 800);
      clearTimeout()
    }
  }, [id, taskData, setTaskData, checked])

  return (
    <div className={checked ? 'tasklist-item slide' : 'tasklist-item'}>
      <p className={styleButton(category)}>{category}</p>

      <div className="others">
        <p className={styleButton(priority)}>{priority}</p>
        <div className="task">
          <div className="icon" onClick={() => iconCheckHandler(id)}> 
            {checked ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
          </div>
          <p className={checked ? 'line' : null}>{name}</p>
        </div>
        <div className="period">
          <p className="date">{date}</p>
          <p className="time">{formatTime(time)}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskItem