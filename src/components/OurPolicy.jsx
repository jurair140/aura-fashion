import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
    <div>
      <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>we offer hassle free exchange policy</p>
    </div>
  
    <div>
      <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400'>we offer 7 days return policy</p>
    </div>
  
    <div>
      <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>Best Customer Support</p>
      <p className='text-gray-400'>24/7 customer support</p>
    </div>
  
    <div>
      <img src={assets.percent_icon} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>100% Original</p>
      <p className='text-gray-400'>premium leather products</p>
    </div>
  </div>
  
  )
}

export default OurPolicy 
