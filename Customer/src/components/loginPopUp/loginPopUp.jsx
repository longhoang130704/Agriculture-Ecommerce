import React, {useContext} from 'react'
import './loginPopUp.css'
import logo from '../../assets/logo.png'
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import arrow_icon_w from '../../assets/ICON/arrow_circle_right_24dp_FFFFFF_FILL1_wght200_GRAD0_opsz24.png'

const loginPopUp = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext);
    const [currState, setCurrState] = useState("Đăng nhập");
    const [data, setData] = useState({
        "phone": '',
        "password": '',
        "firstName": '',
        "lastName": '',
        "sex": 'Male',
        "address": '123 Main St, Anytown, USA',
        "cccd": '',
        "email": ''
    });

    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const [noti, setNoti] = useState('');
    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Đăng nhập") {
            newUrl += "/api/auth/login";
        } else {
            newUrl += "/api/user";
        }

        try {
            const response = await axios.post(newUrl, data);
            if (response.status === 200) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userName", response.data.user.name);
                setShowLogin(false);
                alert("Đăng nhập thành công");
            }
        } catch (error) {
            if (error.response) {
                // Lỗi từ phía server (4xx, 5xx)
                console.log(error.response.data.message);
                setNoti(error.response.data.message);
            } else {
                // Lỗi khác (ví dụ: không kết nối được server)
                console.log("Đã xảy ra lỗi:", error.message);
                setNoti("Đã xảy ra lỗi, vui lòng thử lại sau.");
            }
        }
    };


    return (
        <div className='loginPopUp'>
            <form onSubmit={onLogin} className="loginPopUp-container">
                <div className="login-title">
                    <CancelIcon onClick={()=>setShowLogin(false)} className="" />
                    <img src={logo} alt="logo" />
                </div>
                <div className="login-input">
                    <input name='firstName'onChange={onchangeHandler} value={data.firstName} type="text" placeholder='Họ'/>
                    <input name='lastName' onChange={onchangeHandler} value={data.lastName} type="text" placeholder='Tên'/>
                    <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder="Email"  />
                    <input type="password" name='password'onChange={onchangeHandler} value={data.password} placeholder="Mật khẩu" />
                </div>
                {currState === "Đăng kí" ? 
                        <div className="login-input">
                            <input name='cccd' onChange={onchangeHandler} value={data.cccd} type="text" placeholder='Số CCCD/Passport'/>
                            <input name='phone' onChange={onchangeHandler} value={data.phone} type="tel" placeholder='Số điện thoại'/>
                        </div>
                        : null }
                {currState === "Đăng kí" ?
                    <div className="changeState-login">
                        <button className="change-state" onClick={(event) => { event.preventDefault(); setCurrState("Đăng nhập"); }}>
                            Tôi đã có tài khoản
                        </button>
                        <button className="continue-button" type='submit'>
                            <div>Đăng kí</div>
                            <img className='w-8 h-8' src={arrow_icon_w} alt="arrow" />
                        </button>
                    </div> :
                    <div className="changeState-login">
                        <button className="change-state" onClick={(event) => { event.preventDefault(); setCurrState("Đăng kí"); }}>
                            Tôi chưa có tài khoản
                        </button>
                        <button className="continue-button" type='submit'>
                            <div>Đăng Nhập</div>
                            <img className='w-8 h-8' src={arrow_icon_w} alt="arrow" />
                        </button>
                    </div>
                }
            <div className="use-term">
                <p>Bằng việc tiếp tục, tôi đồng ý với điều khoản sử dụng và chính sách quyền riêng tư.</p>
            </div>
            <div className="items-center justify-center text-center text-white font-bold">
            {noti && (
                <p>
                    {noti === 'User not found' 
                        ? "Không tìm thấy thông tin người dùng" 
                        : noti === 'Invalid password' 
                        ? "Sai mật khẩu" 
                        : noti}
                </p>
            )}
            </div>

            </form>
        </div>

    )
}

export default loginPopUp