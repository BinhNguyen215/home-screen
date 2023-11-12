import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesLink = ({content, to, ...props }) => {
  return (
    <Link className='categories-link' to={to} {...props}>{content}</Link>
  )
}

export default CategoriesLink