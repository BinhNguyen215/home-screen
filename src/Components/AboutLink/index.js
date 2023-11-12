import React from 'react'
import { Link } from 'react-router-dom'

const AboutLink = ({content, to, ...props }) => {
  return (
    <Link className='about-link' to={to} {...props}>{content}</Link>
  )
}

export default AboutLink