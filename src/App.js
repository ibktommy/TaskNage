import React from 'react'
import TaskList from './TaskList';

function App() {

  return (
    <div className='container'>
      <h2>
        <span>Tasknage</span>
        <span>Your Personal Tasklist Web App</span>
      </h2>

      <main>
        <h4>Create new task</h4>

        <div className="input-text">
          <input type="text" placeholder='Task Name' />
        </div>
        <div className="input-text">
          <input type="text" placeholder='Task Description' />
        </div>

        <div className="input-period">
          <input type="date" name="data" id="date" />
        </div>
        <div className="input-period">
          <input type="time" name="time" id="time" />
        </div>

        <div className="priority">
          <h5>
            Priority
          </h5>
          <div className="priority-list">
            <button>Low</button>
            <button>Medium</button>
            <button>High</button>
          </div>
        </div>

        <div className="category">
          <h5>
            Category
          </h5>
          <div className="category-list">
            <button>Work</button>
            <button>Family</button>
            <button>School</button>
          </div>
        </div>
      </main>

      <TaskList />
    </div>
  );
}

export default App;
