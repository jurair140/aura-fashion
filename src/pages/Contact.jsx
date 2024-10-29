import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

function Contact() {
  return (
   <>
   
   <div className='text-center text-2xl pt-10 border-t'>
    <Title text1={"CONTACT"} text2={'US'}/>
   </div>
   
   <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img src={assets.contact_img} className='w-full max-w-[450px]' alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>676305 kunnamppuram <br />malappuram,kerela,india</p>
        <p className='text-gray-500'>Phone : +91 8975578348 <br />Email : aurafashion@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
        <p className='text-gray-500'>Learn  more about our company culture and open positions</p>
        <button className='border border-black px-8 py-4'>Explore Our Career</button>
      </div>
   </div>


   </>
  )
}

export default Contact
