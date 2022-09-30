import React, { useState } from 'react'
import Inputs from './components/Inputs';
import TaskList from './TaskList';

function App() {
  // APP STATE
  const [data, setData] = useState([])


  // Function To Get Data Prop From Input-Child-Component
  const getTaskData = (newTaskData) => {
    setData([...data, newTaskData])
  }

  return (
    <div className='container'>
      <h2>
        <span>Tasknage</span>
        <span>Your Personal Tasklist Web App</span>
      </h2>

      <Inputs onGetTaskData={getTaskData} />

      {/* Display TaskList Component only when we have tasks submitted */}
      {data.length > 0 && <TaskList data={data} />}
    </div>
  );
}

export default App;
