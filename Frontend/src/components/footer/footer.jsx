import React from 'react'
import './footer.css'


function footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>VỀ CHÚNG TÔI</h2>
                    <p>NiceFrais is a mini supermarket chain specializes in selling fresh food and necessities of a group of students of HCMUT. </p>
                      <p>Business items: Safe, clean and fresh fruits and vegetables</p>
                      <p>Bach Hoa Xanh brings to consumers: a diverse choice of goods and services, convenience, meeting the daily shopping needs of every family with the best quality and the most competitive prices.</p>

                    {/* <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""></img>
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div> */}
                </div>
                <div className="footer-content-center">
                    <h2>NICE FRAIS</h2>
                        <ul>
                          <li><a href="/">Home</a></li>
                          <li><a href="/cart">Cart</a></li>
                        </ul>

                </div>
                <div className="footer-content-right">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li>+84 972-345-807</li>
                        <li>nicefrais@gmail.com</li>
                        <li>268 Ly Thuong Kiet Street, W14, D10, Ho Chi Minh City</li>
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