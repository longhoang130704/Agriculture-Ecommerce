import React from 'react'
import './loginPopUp.css'
import logo from '../../assets/logo.png'
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const loginPopUp = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Đăng kí");
    return (
        <div className='loginPopUp'>
            <form className="loginPopUp-container">
                <div className="login-title">
                    <CancelIcon onClick={()=>setShowLogin(false)} className="close-icon" />
                    <img src={logo} alt="logo" />
                </div>
                <div className="login-input">
                    <input type="text" placeholder="Số điện thoại" />
                    <input type="password" placeholder="Mật khẩu" />
                </div>
                {currState === "Đăng kí" ? 
                        <div className="login-input">
                            <input type="text" placeholder="Nhập lại mật khẩu" />
                            <input type="text" placeholder="Họ và tên" />
                        </div>
                        : null }
                {currState === "Đăng kí" ?
                    <div className="changeState-login">
                        <button className="change-state" onClick={(event) => { event.preventDefault(); setCurrState("Đăng nhập"); }}>
                            Tôi đã có tài khoản
                        </button>
                        <div className="continue-button">
                            <InteractiveHoverButton className="continue" onClick={(event) => event.preventDefault()}>Đăng kí</InteractiveHoverButton>
                        </div>
                    </div> :
                    <div className="changeState-login">
                        <button className="change-state" onClick={(event) => { event.preventDefault(); setCurrState("Đăng kí"); }}>
                            Tôi chưa có tài khoản
                        </button>
                        <div className="continue-button">
                        <InteractiveHoverButton className="continue" onClick={(event) => event.preventDefault()}>Đăng nhập</InteractiveHoverButton>
                        </div>
                    </div>
                }
            <div className="use-term">
                <p>Bằng việc tiếp tục, tôi đồng ý với điều khoản sử dụng và chính sách quyền riêng tư.</p>
            </div>
            </form>
        </div>

    )
}

export default loginPopUp