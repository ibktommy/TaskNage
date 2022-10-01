import React from 'react'
import TaskItem from './components/TaskItem';
import UserName from './components/UserName';
import currentDate from './utils/Date';

const TaskList = ({ data, passDelete }) => {

  return (
    <div className="tasklist">
      <UserName data={data} />
      <p className="para">
        Let's be productive today
      </p>
      <p className="date">
        Today, {currentDate}
      </p>

      {data.map((dataItem, index) => {
        return (
          <TaskItem key={index} {...dataItem} onDeleteTask={passDelete}/>
        )
      })}
    </div>
  )
}

export default TaskList