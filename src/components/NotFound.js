import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Whoops, you seem to be lost. You can find your way home by clicking below:</p>
      <Link to='/'>Go Home</Link>
      <Redirect to='/' />
    </div>
  )
}

export default NotFound
