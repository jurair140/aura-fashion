import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
        <h1 className='unlock-regular font-extrabold text-2xl mb-5'>LEATHERZ</h1>
            <p className='w-full md:w-2/3 text-gray-600'>
            We take pride in offering premium leather goods that blend timeless design with unmatched quality. Every product is crafted with care, using authentic materials to ensure lasting value and everyday elegance.            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'> 
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Get in  Touch</p>

            <ul className='flex flex-col gap-1 text-gray-600'> 
                <li>+91 89214 31498</li>
                <li>Ram Moham Road ,Calocut, Calicut, India 673004</li>
            </ul>

        </div>

    </div>
    <div>
        <hr />
            <p className="py-5 text-center text-sm">
                &copy; 2025 - All Rights Reserved. Designed and Developed by <a 
                    href="https://calicutwebdesigners.com"  // Add your link here
                    className="text-gray-500 hover:text-gray-700 cursor-pointer no-underline"
                >
                    CalicutWebDevelopers
                </a>
             </p>

    </div>
    </>
)

}

export default Footer
