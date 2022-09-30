import React, { useEffect, useState } from 'react'

const Inputs = ({ onGetTaskData }) => {
  // Inputs States
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [priority, setPriority] = useState("")
  const [category, setCategory] = useState("")

  // UseEffect Hook That Runs Event After Mounting Component
  useEffect(() => {
    let pBtn = document.querySelectorAll('.priority-buttons')
    let cBtn = document.querySelectorAll('.category-buttons')

    const handleBtnClick = (e) => {
      e.target.classList.add('pressed')

      if (e.target.parentElement.classList.contains('priority-list')) {
        setPriority(e.target.textContent)
      } else if (e.target.parentElement.classList.contains('category-list')) {
        setCategory(e.target.textContent)
      }

      let siblings = Array.from(e.target.parentElement.children, ((child) => {
        return child
      }))
      siblings.filter((n) => {
        if (!n.classList.contains('pressed')) {
          return n.disabled = true
        }
        return n
      })
    }

    pBtn.forEach((btn) => {
      btn.addEventListener('click', handleBtnClick)
    })
    cBtn.forEach((btn) => {
      btn.addEventListener('click', handleBtnClick)
    })
    return () => {
      pBtn.forEach((btn) => {
        btn.removeEventListener('click', handleBtnClick)
      })
      cBtn.forEach((btn) => {
        btn.removeEventListener('click', handleBtnClick)
      })
    }
  }, [])

  // Submit Button Funtion Handler
  const submitTaskHandler = () => {
    if (
      name === "" ||
      description === "" ||
      date === "" ||
      time === "" ||
      priority === "" ||
      category === ""
    ) {
      alert("PLEASE SELECT ALL OPTIONS AND FILL IN ALL INPUTS!")
      return
    } else {

      const newTaskDetails = {
        name,
        description,
        date,
        time,
        priority,
        category,
      }

      // Function-Prop that Passes the newTaskDetails Up To The App-Component
      onGetTaskData(newTaskDetails)
    }

    setName("")
    setDescription("")
    setDate("")
    setTime("")
    setPriority("")
    setCategory("")

    // Resetting the List Buttons After Successful Creation Of A New Task
    let pBtn = document.querySelectorAll('.priority-buttons')
    pBtn.forEach((btn) => {
      btn.classList.remove('pressed')
      btn.disabled = false
    })

    let cBtn = document.querySelectorAll('.category-buttons')
    cBtn.forEach((btn) => {
      btn.classList.remove('pressed')
      btn.disabled = false
    })

  }
  
  return (
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
          <button className='priority-buttons'>Low</button>
          <button className='priority-buttons'>Medium</button>
          <button className='priority-buttons'>High</button>
        </div>
      </div>

      <div className="category">
        <h5>
          Category
        </h5>
        <div className="category-list">
          <button className='category-buttons'>Work</button>
          <button className='category-buttons'>Family</button>
          <button className='category-buttons'>School</button>
        </div>
      </div>

      <button type='submit' className="submit-btn" onClick={submitTaskHandler}>Create Task</button>
    </main>
  )
}

export default Inputs