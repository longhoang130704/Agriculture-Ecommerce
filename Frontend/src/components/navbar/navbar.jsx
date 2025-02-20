import React from 'react'
import logo from '../../assets/logo_cir.png'
import './navbar.css'
import arrow_icon from '../../assets/ICON/arrow_circle_right_30dp_8EB486_FILL1_wght100_GRAD0_opsz24.png'
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const navbar = ({ setShowLogin }) => {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
        <div className="navbar-left">
            <img src={logo} alt="" className="logo" />
        </div>
        <div className="navbar-center">
            <ul>
                <li>Trang chủ</li>
                <li>Giỏ hàng</li>
            </ul>
        </div>
        <div className="navbar-right">
            <div onClick={()=>setShowLogin(true)} className="button">
                <InteractiveHoverButton className="custom-button-bg custom-button-text custom-hover-bg" >Đăng nhập</InteractiveHoverButton>
            </div>
        </div>

    </div>
    </div>
  )
}

export default navbar