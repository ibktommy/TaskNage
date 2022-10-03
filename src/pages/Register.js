import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useGlobalAppContext } from '../context/context'
import { useFirebaseContext } from '../context/firebaseContext'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // From FirebaseContext
  const { register } = useFirebaseContext()

  // From AppContext
  const { firebaseError, setFirebaseError } = useGlobalAppContext()

  // Navigate
  const navigate = useNavigate()

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (email === "" || password === "" || confirmPassword === "") {
        setFirebaseError('Please fill in the form details appropriately!')
      } else if (password !== confirmPassword) {
        setFirebaseError('Your Password Do not Match!')
        setPassword('')
        setConfirmPassword('')
      } else {
        await register(email, password, confirmPassword)
        console.log('User Registered Successfully!')
        navigate('/')
      }
    } catch (error) {
      setFirebaseError(error.message)
    }
  }

  useEffect(() => {
    if (firebaseError) {
      let errorText = document.querySelector('.form-error')
      console.log(errorText)
      setTimeout(() => {
        errorText.classList.add('hidden')
      }, 3000);
      errorText.classList.remove('hidden')
      clearTimeout()
    }
  }, [firebaseError])

  return (
    <main className='form-main'>
      <h3 className='form-title'>Register Your Account</h3>

      {firebaseError && <p className='form-error'>{firebaseError}</p>}

      <form onSubmit={formSubmitHandler}>
        <div className="username">
          <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="password">
          <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <button className="submit-form">
          Click to Register
        </button>

        <p>
          Already have an Account?
          <Link to='/login' className='link'>LOGIN</Link>
        </p>
      </form>
    </main>
  )
}

export default Register