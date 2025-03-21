import React from 'react'
import './productItem.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {StoreContext} from '../../context/StoreContext';

const productItem = ({id, name, price,image }) => {
        const {addtoCart} = React.useContext(StoreContext)
return (
    <div className='productItem'>
                    <div className="product-item-img-container">
                            <img className='product-item-image' src={image} alt="" />            
                    </div>
                    <div className="productItem-infor">
                            <div className="name">
                                    {name}
                            </div>
                            <div className="price">
                                    {price}
                            </div>
                    </div>
                    <div className="add-to-cart-button"  onClick={()=>addtoCart(id)}>
                            <button className='button' >Thêm vào giỏ hàng</button>
                            <div className="cart-icon">
                            <LocalGroceryStoreIcon />
                            </div>
                    </div>
    </div>
)
}

export default productItem