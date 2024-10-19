import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

function Collection() {

  const {products} = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false)

  return (
    <>
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>
      {/* we create here filter obtion and it 2 filter main and sub */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center gap-2 cursor-pointer' onClick={()=>setShowFilter(!showFilter)}>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'' : 'hidden'} sm:block` }>
         <p className='mb-3 text-sm font-medium'>CATAGORIES</p>
           
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} />Men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} />Women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} />Kids
            </p>

           </div>
        </div>

          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'' : 'hidden'} sm:block` }>
           <p className='mb-3 text-sm font-medium'>TYPE</p>
            
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Topwear'} />Topwear
              </p>
            
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
              </p>
            
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Winterwear'} />Winterwear
              </p>
            
             </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default Collection
