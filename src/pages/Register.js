import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const formSubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <main className='form-main'>
      <h3 className='form-title'>Register Your Account</h3>

      <form onSubmit={formSubmitHandler}>
        <div className="username">
          <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="password">
          <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <button className="submit-form">
          Click to Register
        </button>

        <p>
          Already have an Account?
          <span>LOGIN</span>
        </p>
      </form>
    </main>
  )
}

export default Register