import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LimitedDeals = () => {

     const {products} = useContext(ShopContext)
     const [limitedDeals, setLimitedDeals] = useState([])
    
     useEffect(()=>{
         const bestProducts = products.filter((item)=>(item.limited))
         setLimitedDeals(bestProducts.slice())
      },[])

  return (
    <div className='py-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'LIMITED'} text2={'DEALS'}/>
            <p className='w-3/4 text-xs sm:text-sm md:text-base m-auto text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quaerat! Nisi dignissimos quos blanditiis sapiente
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
            {
                limitedDeals.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price}  image={item.image} />


                ))
            }
        </div>
      
    </div>
  )
}

export default LimitedDeals
