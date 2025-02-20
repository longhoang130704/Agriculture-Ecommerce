
import React from 'react'
import exampleImage from '../../assets/organic.png';
import ProductItem from '../productItem/productItem'
const productDisplay = ({category}) => {
    const food_list=[
    {
        suplier: "Tuan",
        category: "Bán chạy",
        productName: "Cà rốt vị khoai tây",
        description: "Cà rốt vi khoai tay",
        imageUrl: exampleImage,
        imageFile: '',
        brand: "Tuan",
        quantityPerunit: 1,
        buyPrice: 10000,
        sellPrice: 15000,      
        rating: 4.5,
        numberReviews: 10 
    },
    {
        suplier: "Đẹp trai",
        category: "Rau củ",
        productName: "Bắp cải khổng lồ",
        description: "Cà rốt vị khoai tay",
        imageUrl: exampleImage,
        imageFile: '',
        brand: "Tuan",
        quantityPerunit: 1,
        buyPrice: 10000,
        sellPrice: 15000,      
        rating: 4.5,
        numberReviews: 10 
    },
    {
        suplier: "Siêu cấp vũ trụ",
        category: "Trái cây",
        productName: "Cà chua không chua",
        description: "Cà rốt vi khoai tay",
        imageUrl: exampleImage,
        imageFile: '',
        brand: "Tuan",
        quantityPerunit: 1,
        buyPrice: 10000,
        sellPrice: 15000,      
        rating: 4.5,
        numberReviews: 10 
    }
]
  return (
    <div className='productDisplay'>
        <div className="productDisplay-list">
        {
          food_list.map((item, index)=>{
            if(category==="All" || category===item.category){
              return <ProductItem key={index} name={item.productName} price={item.sellPrice} image={item.imageUrl}  />
           }
             
          })}
        </div>
    </div>
  )
}

export default productDisplay