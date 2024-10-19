import { useState } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import Collection  from './pages/Collection'
import About  from './pages/About'
import Contact  from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/producuct/:productId' element={<Product/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='palce-order' element={<PlaceOrder/>}/>
        <Route path='orders' element={<Orders/>}/>



      </Routes>
      </div>
    </>
  )
}

export default App
