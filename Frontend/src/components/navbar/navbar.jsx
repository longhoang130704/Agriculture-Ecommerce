import React from 'react'
import logo from '../../assets/logo_cir.png'
import './navbar.css'
import arrow_icon from '../../assets/ICON/arrow_circle_right_30dp_8EB486_FILL1_wght100_GRAD0_opsz24.png'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
        <div className="navbar-left">
            <img src={logo} alt="" className="logo" />
        </div>
        <div className="navbar-center">
            <li>Home</li>
            <li>Cart</li>
        </div>
        <div className="navbar-right">
            <div className="button">
                <li>Log in</li>
                <img className='arrow_icon' src={arrow_icon} alt="" />
            </div>
        </div>

    </div>
    </div>
  )
}

export default navbar