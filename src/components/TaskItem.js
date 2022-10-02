import React, { useCallback, useEffect, useState } from 'react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { useGlobalAppContext } from '../context/context'
import { styleButton } from '../utils/styleButton'
import { formatTime } from '../utils/Time'

const TaskItem = ({ name, date, time, priority, category, id }) => {
  const [checked, setChecked] = useState(false)

  const { data, setData } = useGlobalAppContext()

  const iconCheckHandler = useCallback((id) => {
    setChecked(true)
  }, [setChecked])

  // Deleting a TaskItem when the item has been checked
  useEffect(() => {
    if (checked) {
      let filteredTasks = data.filter((item) => item.id !== id)

      setTimeout(() => {
        setChecked(false)
        setData(filteredTasks)
      }, 800);
      clearTimeout()
    }
  }, [id, data, setData, checked])

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