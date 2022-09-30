import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'

const TaskItem = ({ name, date, time, priority, category }) => {
  return (
    <div className="tasklist-item">
      <p className="category">{category}</p>

      <div className="others">
        <p className="priority">{priority}</p>
        <div className="task">
          <div className="icon">
            <MdRadioButtonUnchecked/>
          </div>
          <p>{name}</p>
        </div>
        <div className="period">
          <p className="date">{date}</p>
          <p className="time">{time}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskItem

// const  = data