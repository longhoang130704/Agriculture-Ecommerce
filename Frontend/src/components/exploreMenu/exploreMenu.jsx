import React from 'react'
import './exploreMenu.css'
import menu_1 from '../../assets/menu_1.png'
import menu_2 from '../../assets/menu_2.png'
import menu_3 from '../../assets/menu_3.png'

const exploreMenu = ({category, setCategory}) => {
    const menu_list=[
        {
            menu_name: "Bán chạy",
            menu_image: menu_1
        },
        {
            menu_name: "Trái cây",
            menu_image: menu_2
        },
        {
            menu_name: "Rau củ",
            menu_image: menu_3
        }
    ]
  return (
    <div className='exploreMenu'>
        <h1>Khám phá gian hàng của chúng tôi</h1>
        <div className="explore-menu-list">
            {
                menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )  
                })
            }
        </div>

    </div>
  )
}

export default exploreMenu