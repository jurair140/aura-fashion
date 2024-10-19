import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat deleniti expedita exercitationem, eaque inventore aut quas tempore officiis architecto consequatur, laudantium sunt voluptates, quibusdam reprehenderit ipsa a. Assumenda, nobis.
            </p>
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
                <li>+91 8975578348</li>
                <li>Aurafahion@gmail.com</li>
            </ul>

        </div>

    </div>
    <div>
        <hr />
        <p className='py-5 text-center text-sm'>Copy right 2024@Aurafahion.com - All Right Reserved.</p>
    </div>
    </>
)

}

export default Footer
