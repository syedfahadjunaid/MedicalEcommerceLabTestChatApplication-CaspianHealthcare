import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button({children,color,bg,link}) {
  return (
  <Link className='button_link' to={link?link:'#'} style={{backgroundColor:`${bg}`,color:`${color}`}}>{children}</Link>
  )
}

export default Button