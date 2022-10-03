import React from 'react'
import { useFirebaseContext } from '../context/firebaseContext'

const UserName = () => {
  const { user } = useFirebaseContext()

  let username = user.email.slice(0, 3);

  return (
    <h3 className="name">
      Hello {username}
    </h3>
  )
}

export default UserName