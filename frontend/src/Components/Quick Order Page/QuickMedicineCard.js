import React from 'react'
import './QuickMedicineCard.css'
function QuickMedicineCard({title,dic,icon,subtitle,ficon,color}) {
  return (
    <div className='quickMedicinecard'>
        <div className='quickMedicinecard_heading'>
            <h6>{title?title:''}</h6>
        </div>
        <div className='quickMedicinecard_bottom'>
            <h6>{dic?dic:''}</h6>
            <span>
              <p style={{color:`${color}`}}>{ficon && ficon}</p>
            <p>{subtitle?subtitle:''}</p>
            {icon && icon }

            </span>
        </div>
    </div>
  )
}

export default QuickMedicineCard