import React from 'react'

function App() {

  return (
    <>
      <h2>TaskNaage- Your Personal TaskList Web App</h2>

      <main>
        <h4>Create New Task</h4>

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
          <div className="prority-list">
            <button>Low</button>
            <button>Medium</button>
            <button>High</button>
          </div>
        </div>

        <div className="category">
          <button>Low</button>
          <button>Family</button>
          <button>School</button>
        </div>
      </main>
    </>
  );
}

export default App;
