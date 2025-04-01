import React from 'react'
import logo from '../../assets/logo_cir.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import arrow_icon_w from '../../assets/ICON/login_icon.png'


const navbar = ({ setShowLogin }) => {
    const navigate = useNavigate();
    const {url,setToken} = useContext(StoreContext);
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        setToken(null);
        setShowLogin(false);
        navigate('/');
        alert("Đăng xuất thành công")
      }

return (
        <div className='navbar'>
                <div className='navbar-container'>
                        <NavLink to='/' className="navbar-left">
                                <img src={logo} alt="" className="logo" />
                        </NavLink>
                        <div className="navbar-center">
                                <NavLink to='/' className='option'>
                                        <div>Trang chủ</div>
                                </NavLink>
                                <NavLink to='/cart' className='option'>
                                        <div>Giỏ hàng</div>
                                </NavLink>
                        </div>
                        <div className="navbar-right">
                                {!localStorage.getItem("token") ?
                                        <div onClick={() => setShowLogin(true)} className="cursor-pointer border gap-2 flex items-center p-1 rounded-[20px] border-2 border-[#A52223] ">
                                                <div>Đăng nhập</div>
                                                {/* <div onClick={()=>setShowLogin(true)} className=' bg-[#8EB486] rounded-full '><StartRoundedIcon/></div> */}
                                                <img src={arrow_icon_w} className='w-7 h-7' />
                                        </div>
                                        :
                                        <div className=" gap-2 flex items-center p-1 rounded-[20px] border-2 border-[#A52223] ">
                                                <div onClick={logout}>{localStorage.getItem("userName")}</div>
                                                {/* <div onClick={logout} className='cursor-pointer bg-[#8EB486] rounded-full '><StartRoundedIcon/></div> */}
                                                <img src={arrow_icon_w} className='w-7 h-7' />
                                        </div>
                                }
                        </div>
                </div>
        </div>
)
}

export default navbar