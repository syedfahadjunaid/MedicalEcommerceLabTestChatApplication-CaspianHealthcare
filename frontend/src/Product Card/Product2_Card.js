import React from 'react'
import './Product2_Card.css'
import img1 from '.././img/image 4.jpg'
import Button from '../Button/Button'
import { useStateValue } from '../context api/StateProvider'
function Product_Card({img,bg}) {
  const [{cart},dispatch]=useStateValue()
  const addToCard=()=>{
dispatch({
  type:"ADD_TO_CART",
  item:{
    id:'1',
    price:2000,
    // amount:'1'
    // title:title,
    // image:image,
    // price:price,
    // rating:rating
  }
})
  }
  return (
    <div className='productCard2' style={{backgroundColor:`${bg}`}}>
<div className='productCard_img2'>
  <img src={img?img:img1} alt='product Image'/>
</div>
<div className='productCard_details2'>
  <h6>Product title</h6>
  <p>Product Discription</p>
<span>₹ <strong>555</strong></span>
</div>
<button className='productCard_button2'  onClick={addToCard}>Add To Card</button>
{/* <Button color='#fff' bg='#2a7fba'>Add to Cart</Button> */}
    </div>
  )
}

export default Product_Card