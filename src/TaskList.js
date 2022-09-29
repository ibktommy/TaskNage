import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import UserName from './components/UserName';
import currentDate from './components/utils/Date';

const TaskList = () => {

  return (
    <div className="tasklist">
      <UserName />
      <p className="para">
        Let's be productive today
      </p>
      <p className="date">
        Today, {currentDate}
      </p>

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
    </div>
  )
}

export default TaskList