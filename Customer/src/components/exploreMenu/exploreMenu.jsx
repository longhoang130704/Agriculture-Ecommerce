import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './exploreMenu.css'
import menu_1 from '../../assets/menu_1.png'
import menu_2 from '../../assets/menu_2.png'
import menu_3 from '../../assets/menu_3.png'

const exploreMenu = ({category, setCategory}) => {
    const [categories, setCategories] = useState([]); // Danh sách phan loại
    useEffect(() => {
        axios
            .get(`https://agri-eco-order-component.onrender.com/api/category`)
            .then((response) => {
            const apiCategories = response.data.map((got) => ({
                id: got._id,
                categoryName: got.categoryName,
                image: got.imageUrl,
                
            }));
            setCategories(apiCategories); // Cập nhật danh sách sản phẩm
            // setLoading(false); // Đánh dấu đã tải xong
            })
            .catch((err) => {
            console.error('Lỗi khi gọi API:', err); // Ghi log lỗi vào console
            setError('Không thể tải dữ liệu sản phẩm.');
            // setLoading(false);
            });
    }, [category]);

    // const [activeTab, setActiveTab] = useState("All")
  return (
    <div className='exploreMenu'>
        <h1>Khám phá gian hàng của chúng tôi</h1>
        <div className="explore-menu-list">
            {
                categories.map((item, index) => {
                    // console.log(item.categoryName)
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.categoryName?"All":item.categoryName)} key={index} className='explore-menu-list-item gap-4'>
                            <img className={category===item.categoryName?"active":""} src={item.image} alt="" />
                            <div className='mt-2'>{item.categoryName}</div>
                        </div>
                    )  
                })
            }
        </div>

    </div>
  )
}

export default exploreMenu