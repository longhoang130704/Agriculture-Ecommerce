import React from 'react'

const productItem = ({name, price,image }) => {
  return (
    <div className='productItem'>
        <div className='productItem-container'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />            
            </div>
            <div className="productItem-infor">
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
            <div className="add-to-cart">
                <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
            </div>
        </div>

    </div>
  )
}

export default productItem