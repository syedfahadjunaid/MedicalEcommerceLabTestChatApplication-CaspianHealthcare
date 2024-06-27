import { Inventory, LocalShipping } from '@mui/icons-material'
import React from 'react'
import './OrderCard.css'
function OrderCard() {
  return (
    <div className='ordercard'>
        <div className='ordercard_top'>
            <div className='ordercard_top_left'>
                <span>
                <Inventory/>
                <h6>Order Delivered</h6>
                </span>
              
            </div>
            <div className='ordercard_top_right'>
                <p>Date Of Order</p>
            </div>
        </div>
        <div className='ordercard_middle'>
            <div className='ordercard_middle_left'>
                <LocalShipping/>
                <span>
                    <p>Order Id </p>
                    <p>Medicine Order Id</p>
                </span>
                 </div>
            <div className='ordercard_middle_right'>
                <p>P00045155225622</p>
                <p>DownLoad Invoice</p>
                 </div>
        </div>
        <div className='ordercard_bottom'>
            <p>ReOrder</p>
        </div>
    </div>
  )
}

export default OrderCard