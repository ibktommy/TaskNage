import React, { useEffect, useRef, useState } from 'react'
import TaskList from './TaskList';

function App() {
  // APP STATE
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [priority, setPriority] = useState("")
  const [category, setCategory] = useState("")
  const [data, setData] = useState([])

  return (
    <div className='container'>
      <h2>
        <span>Tasknage</span>
        <span>Your Personal Tasklist Web App</span>
      </h2>

      <main>
        <h4>Create new task</h4>

        <div className="input-text">
          <input
            type="text"
            placeholder='Task Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-text">
          <input
            type="text"
            placeholder='Task Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="input-period">
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-period">
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
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

        <button type='submit' className="submit-btn">Create Task</button>
      </main>

      
    </div>
  );
}

export default App;
