import React, { useEffect, useState } from 'react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { useGlobalAppContext } from '../context/context'
import { styleButton } from '../utils/styleButton'
import { formatTime } from '../utils/Time'

const TaskItem = ({ name, date, time, priority, category }) => {
  const [checked, setChecked] = useState(false)

  const iconCheckHandler = () => {
    setChecked(!checked)
  }

  return (
    <div className="tasklist-item">
      <p className={styleButton(category)}>{category}</p>

      <div className="others">
        <p className={styleButton(priority)}>{priority}</p>
        <div className="task">
          <div className="icon" onClick={iconCheckHandler}>
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