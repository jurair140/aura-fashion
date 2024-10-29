import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetters'

const About = () => {
  return (
    <>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full max-w-[450px]' alt="" />
      <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
      <p>Welcome to our exclusive clothing store, where style meets quality and every piece is curated with passion. We believe that clothing is more than just fabric—it’s a form of self-expression and confidence. Our collection features the latest trends, timeless classics, and unique designs crafted for all occasions.</p>     
      <p>Whether you’re dressing up for an event or refreshing your everyday wardrobe, our pieces are designed to make you look and feel your best.
Explore our range of stylish and comfortable apparel, crafted with care and attention to detail. At our store, we’re dedicated to offering an exceptional shopping experience, from easy browsing to seamless checkout and reliable delivery.</p>
      <b className='text-gray-800 '>Our Mission</b>
      <p>our mission is to empower individuals through fashion, helping them express their unique style with confidence. We are dedicated to offering high-quality, on-trend clothing that combines comfort with elegance, ensuring every piece we create is both versatile and memorable.</p>

      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className='flex flex-col md:flex-row mb-20 text-sm'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Quality Assurance :</b>
         <p>quality is at the heart of everything we do. Each item in our collection goes through a meticulous selection and inspection process </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Convivience</b>
        <p>Shopping should be easy, enjoyable, and tailored to you. At Aura fation spot, we prioritize a seamless experience, from browsing to checkout </p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Exeptional Customer Service</b>
        <p>our customers are our top priority, and we’re committed to providing exceptional service at every step of your shopping journey</p>
      </div>
    </div>

    <NewsLetter/>
    
    </>
  )
}

export default About
