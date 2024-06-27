import React from 'react'
import './Button1.css'
function Button1({children}) {
  return (
    <div className='button'>
        <button  type="button">{children}</button>
    </div>
  )
}

export default Button1