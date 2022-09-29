import React from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'

function App() {

  const date = new Date();

  let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let day = date.getDate()
  let month = monthName[date.getMonth()].slice(0, 3)
  let year = date.getFullYear()

  let currentDate = `${day} ${month}, ${year}.`

  console.log(currentDate)

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

      <div className="tasklist">
        <h3 className="name">
          Hello Best!
        </h3>
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
    </div>
  );
}

export default App;
