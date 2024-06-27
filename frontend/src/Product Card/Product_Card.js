import React, { useState } from 'react'
import './Product_Card.css'
import img1 from '.././img/image 4.jpg'
import Button from '../Button/Button'
import { useStateValue } from '../context api/StateProvider'
import { useNavigate } from 'react-router-dom'
function Product_Card({img,title,details}) {
  const history=useNavigate()
  const [{cart},dispatch]=useStateValue()
  const [addedToCart,setAddedToCart]=useState(false)

  const addToCard=()=>{
    setAddedToCart(true)
    console.log(addedToCart)
dispatch({
  type:"ADD_TO_CART",
  item:{
    id:'1',
    price:2000,
    quantity:1,
    // amount:'1'
    // title:title,
    // image:image,
    // price:price,
    // rating:rating
  }
})
  }
  return (
    <div className='productCard' >
<div className='productCard_img' onClick={()=>history('/singlepage/11')}>
  <img src={img?img:img1} alt='product Image'/>
</div>
<div className='productCard_details' onClick={()=>history('/singlepage/11')}>
  <h6>{title?title:'DETTOL'}</h6>
  <p>{details?details:'bottle of 500 pellets'}</p>
<span><s>₹2500</s> <strong style={{color:'#28A745'}}>₹2000</strong></span>
</div>

{!addedToCart && <button className='productCard_button'  onClick={addToCard}>Add To Cart</button>}
{addedToCart && <button className='productCard_button'  onClick={()=>history('/cart')}>Go To Cart</button>}
{/* <Button color='#fff' bg='#2a7fba'>Add to Cart</Button> */}
    </div>
  )
}

export default Product_Card