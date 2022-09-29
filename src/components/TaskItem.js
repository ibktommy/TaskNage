import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'

const TaskItem = () => {
  return (
    <>
      <div className="tasklist-item">
        <p className="category">work</p>

        <div className="others">
          <p className="priority">High</p>
          <div className="task">
            <MdRadioButtonUnchecked className='icon' />
            <p>Build a Task</p>
          </div>
          <p className="time">
            10:00PM.
          </p>
        </div>
      </div>
      <div className="tasklist-item">
        <p className="category">work</p>

        <div className="others">
          <p className="priority">High</p>
          <div className="task">
            <MdRadioButtonUnchecked className='icon' />
            <p>Build a Task</p>
          </div>
          <p className="time">
            10:00PM.
          </p>
        </div>
      </div>
      <div className="tasklist-item">
        <p className="category">work</p>

        <div className="others">
          <p className="priority">High</p>
          <div className="task">
            <MdRadioButtonUnchecked className='icon' />
            <p>Build a Task</p>
          </div>
          <p className="time">
            10:00PM.
          </p>
        </div>
      </div>

    </>
  )
}

export default TaskItem