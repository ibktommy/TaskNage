import React from 'react'
import Inputs from './components/Inputs';
import { useGlobalAppContext } from './context/context';
import TaskList from './TaskList';

function App() {
  // Get Data-State from the App Context
  const { data } = useGlobalAppContext()

  return (
    <div className='container'>
      <h2>
        <span>Tasknage</span>
        <span>Your Personal Tasklist Web App</span>
      </h2>

      <Inputs />

      {/* Display TaskList Component only when we have tasks submitted */}
      {data.length > 0 && <TaskList data={data} />}
    </div>
  );
}

export default App;
