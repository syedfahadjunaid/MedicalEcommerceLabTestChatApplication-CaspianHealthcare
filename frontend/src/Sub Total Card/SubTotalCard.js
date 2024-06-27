import { LocationOn } from '@mui/icons-material'
import React from 'react'
import Button from '../Button/Button'
import './SubTotalCard.css'
import { getCartTotal } from '../context api/reducer'
import { useStateValue } from '../context api/StateProvider'
import { useNavigate } from 'react-router-dom'
function SubTotalCard({submitbuttom,link}) {
    const history=useNavigate()
    const [{cart},dispatch]=useStateValue()
    // console.log(cart?.length)
    // console.log(getCartTotal(cart),'hell')
    console.log(cart?.map((price)=>(
        price
    )))
  return (
    <div className='subtotalcard'>
        <div className='subtotalcard_subtotal'>
            <p>Sub Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <strong>₹{cart?.item?.price}</strong>
        </div> 
         <div className='subtotalcard_shipping'>
            <p>Shipping &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <strong>₹200</strong>
        </div>  
         <div className='subtotalcard_total'>
            <p className='subtotalcard_total_total'>Total (Tax incl.) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <strong className='subtotalcard_total_total'>₹2200</strong>
        </div>   
         <div className='subtotalcard_loaction'>
            <p>Your delivery location</p>
            <small><LocationOn className='subtotalcard_loaction_icon'/> lucknow</small>
        </div>
        <div className='subtotalcard_checkOut' >
            <Button bg='#6C98FF'color='#fff'>{submitbuttom?submitbuttom:"CheckOut"}</Button>
        </div>
    </div>
  )
}

export default SubTotalCard