import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import Productitem from '../components/ProductItem'
import { useLocation } from 'react-router-dom'

function Collection() {

  const {products, search, showSearch} = useContext(ShopContext)
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState('relevent')

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subParam = searchParams.get('sub');

  useEffect(() => {
    if (subParam) {
      setSubCategory([subParam]);
    }
  }, [subParam]);

  const toogleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }


  const toogleSubCategory = (e) => {

    if(subCategory.includes(e.target.value)){

      setSubCategory(prev=> prev.filter(item => item !== e.target.value))

    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

    const applyFilter = () =>{

      let productsCopy = products.slice()


      if(showSearch && search){
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if (category.length > 0){
        productsCopy = productsCopy.filter(item => category.includes(item.category))
      }

      if (subCategory.length > 0){
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      }

      setFilterProducts(productsCopy)

    }


    const sortProduct = () =>{

      let fbCopy = filterProducts.slice()

      switch(sortType){
        case 'low-high':
          setFilterProducts(fbCopy.sort((a,b)=> (a.price - b.price)));
          break;
        case 'high-low':
          setFilterProducts(fbCopy.sort((a,b)=> (b.price - a.price)));
          break;
        default :
        applyFilter();
        break;
      }


    }

    useEffect(()=>{
      applyFilter(setFilterProducts)
    },[category,subCategory,search,showSearch])

    useEffect(()=>{
      sortProduct()
    },[sortType])



  return (
    <>
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>
      {/* we create here filter obtion and it 2 filter main and sub */}
      <div className='min-w-60 disabled:'>
        <p className='my-2 text-xl flex items-center gap-2 cursor-pointer' onClick={()=>setShowFilter(!showFilter)}>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'' : 'hidden'} sm:block` }>
         <p className='mb-3 text-sm font-medium'>CATAGORIES</p>
           
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'}onChange={toogleCategory} />Men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'}onChange={toogleCategory} />Women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toogleCategory}/>Kids
            </p>

           </div>
        </div>

          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'' : 'hidden'} sm:block` }>
           <p className='mb-3 text-sm font-medium'>TYPE</p>
            
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Footwear'} onChange={toogleSubCategory}/>Footwear
              </p>
            
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Bags'} onChange={toogleSubCategory}/>Bags
              </p>
            
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Belt'} onChange={toogleSubCategory}/>Belt
              </p>

              <p className='flex gap-2'>
                <input type="checkbox" className='w-3' value={'Wallet'} onChange={toogleSubCategory}/>Wallet
              </p>
            
             </div>
          </div>

      </div>


        {/* right side  */}

        <div className='flex-1'>

          <div className='flex justify-between sm:text-2xl text-base mb-4'>
            <Title text1={'ALL'} text2={'COLLECTION'}/>
            {/* sorting oriducts inthus page */}

            <select onChange={(e)=>setSortType(e.target.value)} className=' border-2 border-gray-300 text-sm px-2'>
                <option value="relevent">Sort by: Relevent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
            </select>

          </div>


          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                  <Productitem  key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>

              ))
            }
          </div>

        </div>

    </div>
    </>
  )
}

export default Collection
