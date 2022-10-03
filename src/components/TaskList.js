import React from 'react'
import TaskItem from './TaskItem';
import UserName from './UserName';
import currentDate from '../utils/Date';

const TaskList = ({ data }) => {

  return (
    <div className="tasklist">
      <UserName />
      <p className="para">
        Let's be productive today
      </p>
      <p className="date">
        Today, {currentDate}
      </p>

      {data.map((dataItem, id) => {
        return (
          <TaskItem key={id} {...dataItem} />
        )
      })}

      <button className='logout-btn'>
        Log Out
      </button>
    </div>
  )
}

export default TaskList