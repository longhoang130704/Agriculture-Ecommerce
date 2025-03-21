import React from 'react'
import './footer.css'


function footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>VỀ CHÚNG TÔI</h2>
                    <p>NiceFrais is là một chuỗi siêu thị nhỏ chuyên bán các loại nông sản tươi và các mặt hàng thiết yếu khác.</p>
                    <p>Mặt hàng kinh doanh: Rau củ quả an toàn, sạch và tươi</p>
                    <p>NiceFrais mang đến cho khác hàng: lựa chọn đa dạng về hàng hóa, tiện lợi, đáp ứng mọi nhu cầu hằng ngày của mọi gia đình với một mức giá vô cùng cạnh tranh</p>

                    {/* <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""></img>
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div> */}
                </div>
                <div className="footer-content-center">
                    <h2>NICE FRAIS</h2>
                        <ul>
                          <li><a href="/">Trang chủ</a></li>
                          <li><a href="/cart">Giỏ hàng</a></li>
                        </ul>

                </div>
                <div className="footer-content-right">
                    <h2>LIÊN HỆ CHÚNG TÔI</h2>
                    <ul>
                        <li>+84 972-345-807</li>
                        <li>nicefrais@gmail.com</li>
                        <li>268 Lý Thường Kiệt, Phường 14, Quận 10, TP. Hồ Chí Minh</li>
                    </ul>
                </div>            
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 nicefrais.com - All Right Reserved
            </p>
        </div>
      )
}

export default footer