
import React, { useContext, useEffect } from 'react'
import ProductItem from '../productItem/productItem'
import './productDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { use } from 'react'
import { useState } from 'react'
import axios from 'axios'

const productDisplay = ({category}) => {
    const {food_list}= useContext(StoreContext)
    const [products, setProducts] = useState([]); // Danh sách sản phẩm
    useEffect(() => {
      axios
        .get(`https://agri-eco-order-component.onrender.com/api/product`)
        .then((response) => {
          const apiProducts = response.data.map((product) => ({
            id: product._id,
            productName: product.productName,
            image: product.imageUrl,
            sellPrice: product.sellPrice,
            category: product.categoryId.categoryName,
          }));
          setProducts(apiProducts); // Cập nhật danh sách sản phẩm
          // setLoading(false); // Đánh dấu đã tải xong
        })
        .catch((err) => {
          console.error('Lỗi khi gọi API:', err); // Ghi log lỗi vào console
          setError('Không thể tải dữ liệu sản phẩm.');
          setLoading(false);
        });
    }, [category]);

  return (
    <div className='productDisplay'>
        <div className="productDisplay-list">
        {
          products.map((item, index)=>{
            if(category==="All" || category===item.category){
              // console.log(item.category)
              return <ProductItem key={index} id={item.id} name={item.productName} price={item.sellPrice} image={item.image}  />
           }
             
          })}
        </div>
    </div>
  )
}

export default productDisplay