import React, {useState} from 'react'
import Header from '../../components/header/header'
import ImgSlider from '../../components/ProductShowcase/ProductShowcase'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'
import ProductDisplay from '../../components/productDisplay/productDisplay'

import './home.css'
const home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='home'>
            <Header/>
            <ImgSlider/>
            <ExploreMenu category={category} setCategory={setCategory}/>  
            <ProductDisplay category={category} />     
    </div>
  )
}

export default home