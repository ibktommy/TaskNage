import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useFirebaseContext } from '../context/firebaseContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // From AppContext
  const { firebaseError, setFirebaseError, login } = useFirebaseContext()

  // Navigate
  const navigate = useNavigate()

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (email === "" || password === "") {
        setFirebaseError('Please fill in the form details appropriately!')
        setTimeout(() => {
          setFirebaseError('')
        }, 2000);
      } else {
        setFirebaseError('Connecting...')
        setTimeout(() => {
          setFirebaseError('')
        }, 2000);
        await login(email, password)
        navigate('/')
      }
    } catch (error) {
      setFirebaseError(error.message)
      setTimeout(() => {
        setFirebaseError('')
      }, 2000);
    }
  }

  return (
    <main className='form-main'>
      <Header />
      <h3 className='form-title'>Login Your Account</h3>

      {firebaseError && <p className='form-error'>{firebaseError}</p>}

      <form onSubmit={formSubmitHandler}>
        <div className="username">
          <input type="login" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
          <input type="password" placeholder='Password (at least 6 characters)' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="submit-form">
          Click to Login Your Account
        </button>

        <p>
          Don't have an Account?
          <Link to='/register' className='link'>register</Link>
        </p>
      </form>
    </main>
  )
}

export default Login