import React, { useState } from 'react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { styleButton } from '../utils/styleButton'
import { formatTime } from '../utils/Time'

const TaskItem = ({ name, date, time, priority, category }) => {
  // Check State
  const [check, setChecked] = useState(false)

  const iconCheckHandler = (e) => {
    setChecked(!check)
  }

  return (
    <div className="tasklist-item">
      <p className={styleButton(category)}>{category}</p>

      <div className="others">
        <p className={styleButton(priority)}>{priority}</p>
        <div className="task">
          <div className="icon" onClick={iconCheckHandler}>
            {check ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
          </div>
          <p className={check ? 'line' : null}>{name}</p>
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