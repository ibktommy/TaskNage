import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFirebaseContext } from '../context/firebaseContext'
import Header from '../components/Header'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // From FirebaseContext
  const { register, firebaseError, setFirebaseError } = useFirebaseContext()

  // Navigate
  const navigate = useNavigate()

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (email === "" || password === "" || confirmPassword === "") {
        setFirebaseError('Please fill in the form details appropriately!')
        setTimeout(() => {
          setFirebaseError('')
        }, 2000);
      } else if (password !== confirmPassword) {
        setFirebaseError('Your Password Do not Match!')
        setTimeout(() => {
          setFirebaseError('')
        }, 2000);
        setPassword('')
        setConfirmPassword('')
      } else {
        setFirebaseError('Connecting...')
        setTimeout(() => {
          setFirebaseError('')
        }, 2000);
        await register(email, password, confirmPassword)
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
    <main className='form-main animate__animated animate__fadeInLeft'>
      <Header />
      <h3 className='form-title'>Register Your Account</h3>

      {firebaseError && <p className='form-error'>{firebaseError}</p>}

      <form onSubmit={formSubmitHandler}>
        <div className="username">
          <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
          <input type="password" placeholder='Password (at least 6 characters)' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="password">
          <input type="password" placeholder='Confirm Password (at least 6 characters)' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <button className="submit-form">
          Click to Register
        </button>

        <p>
          Already have an Account?
          <Link to='/login' className='link'>login</Link>
        </p>
      </form>
    </main>
  )
}

export default Register