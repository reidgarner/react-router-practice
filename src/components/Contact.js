import React from 'react'

const Contact = (props) => {
  console.log('Contact Props:', props)
  return (
    <div>
      <h1>Hey {props.username} Contact Us</h1>
      <p>Phone: 333-333-3333</p>
      <p>Email: contact@us.com</p>
    </div>
  )
}

export default Contact
