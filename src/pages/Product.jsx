import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

function Product() {

  const {productId} = useParams()
  const {products, currency} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = () =>{
      
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }
  
  useEffect(()=>{
    fetchProductData()
  },[productId,products])

  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product image */}

          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              
              {
                productData.image.map((item,index)=>(
                  <img src={item} key={index} onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }

            </div>
            <div className='w-full sm:w-[80%]'>
              <img src={image} className='w-full h-auto' alt="" />
            </div>
          </div>

          {/*--------- prodct info ------- */}
          <div className='flex-1 '>
            <div className="font-medium text-2xl mt-2">{productData.name}</div>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_dull_icon} className='w-3 5' alt="" />
              <p className='pl-2'>(122)</p>

            </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                    {
                      productData.sizes.map((item,index)=>(
                          <button key={index} onClick={()=>setSize(item)} className={`border p-4 py-2 bg-gray-100 ${item==size ? 'border-orange-500' : ''}`}>{item}</button>
                      ))
                    }
                </div>
              </div>
              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery available on this product.</p>
                <p>Easy return and exchance policy within 7 days.</p>

              </div>
          </div>

      </div>
      {/* description and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Discover the perfect blend of style and comfort with this stunning dress. Designed to flatter every figure, it offers a versatile look thats suitable for any occasion—whether you're headed to a casual outing, an elegant event, or a night out with friends. </p>
          <p>Crafted from high-quality fabric, this dress provides a comfortable fit and effortless style. The timeless design and attention to detail ensure you always feel confident and chic. Pair it with your favorite accessories for a look that transitions seamlessly from day to night!</p>
        </div>
        
      </div>

    {/* related products */}

    <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
      
    </div>
  ): 
  <div className='opacity-0'></div>
}

export default Product
