import { Add, Minimize, Remove } from '@mui/icons-material'
import React from 'react'
import './Quantity.css'
function Quantity({amount,handleDecrese, handleIncrease}) {
  return (
    <div className='quantity'>
        <div className='quantity_decrease'>
            <Remove onClick={()=>handleDecrese()}/>
        </div>
        <div className='quantity_qantity'><span>{amount}</span></div>
        <div className='quantity_increase'>
            <Add onClick={()=>handleIncrease()} />
        </div>
    </div>
  )
}

export default Quantity