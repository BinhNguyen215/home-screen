import React from 'react'
import { Link } from 'react-router-dom'

const MenuLink = ({content, to, ...props }) => {
  return (
    <Link className='menu-link' to={to} {...props}>{content}</Link>
  )
}

export default MenuLink