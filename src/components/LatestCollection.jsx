import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function LatestCollection() {

    const {products} = useContext(ShopContext)

    const [latestProducts,setLatestProducts] = useState([])

    useEffect(()  =>{
      setLatestProducts(products.slice(3,11))
    },[])

    
    

  return (
   <>
   <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
      <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
       Discover timeless craftsmanship with our newest arrivals — where elegance meets durability in every stitch.       </p>
    </div>
    {/* we are retriving the latestproducts in here with map method and we use propsharing */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 gap-y-6'>
       {/* lg:grid-cols-5 */}
      {
        latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image}  price={item.price} name={item.name} />

        ))
      }

    </div>
   </div>
    
   </>
  )
}

export default LatestCollection
