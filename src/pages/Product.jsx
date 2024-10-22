import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { products } from '../assets/assets';

function Product() {

  const {productId} = useParams()
  const {Products} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')

  const fetchProductData = () =>{
      
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage([0])        
        return null
      }
    })
  }
  
  useEffect(()=>{
    fetchProductData()
  },[productId,products])

  return (
    <div>
      
    </div>
  )
}

export default Product
