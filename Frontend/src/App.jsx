import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import ImgSlider from './components/ProductShowcase/ProductShowcase'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <ImgSlider/>
      <Footer/>
    </div>
  )
}

export default App