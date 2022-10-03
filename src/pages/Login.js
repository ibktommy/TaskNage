import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const formSubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <main className='form-main'>
      <h3 className='form-title'>Login Your Account</h3>

      <form onSubmit={formSubmitHandler}>
        <div className="username">
          <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="submit-form">
          Click to Register
        </button>

        <p>
          Don't have an Account?
          <span>REGISTER</span>
        </p>
      </form>
    </main>
  )
}

export default Login