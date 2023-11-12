import React from 'react'
import { Link } from 'react-router-dom'

const ContactLink = ({icon, to, ...props }) => {
  return (
    <Link className='contact-link' to={to} {...props}>{icon}</Link>
  )
}

export default ContactLink