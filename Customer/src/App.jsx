import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import LoginPopUp from './components/loginPopUp/loginPopUp'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App