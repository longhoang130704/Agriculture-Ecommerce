import React from 'react'
import './cartTag.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const cartTag = ({id, name, image, quantity, price,removeFromCart, addtoCart}) => {
  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    <div className='cartTag-container'>
        <div className="img">
            <img src={image} />
        </div>
        <div className="name">
            {name}
        </div>
        <div className="change-quantity">
          <div className="remove">
          <RemoveCircleIcon onClick={()=>removeFromCart(id)} style={{ color: '#8EB486' }}/>
          </div>
          <div>{quantity}</div>
          <div className="add">
            <AddCircleIcon onClick={()=>addtoCart(id)} style={{ color: '#8EB486' }}/>
          </div>
        </div>
        <div className="subtotal">
          Tạm tính: {formatCurrency(quantity * price)}
        </div>

    </div>
  )
}

export default cartTag