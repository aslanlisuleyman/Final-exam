import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <div className='foot'>
                <ul>
                    <li>Blog</li>
                    <li>FAQs</li>
                    <li> Contact us</li>
                </ul>
                <div className='icon'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-skype"></i>
                <i class="fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
        <div>
            <p>©2018 All Rights Reserverd. This template is made with <span><i class="fa-regular fa-heart"></i>by Colorlib </span>  </p>
        </div>
    </div>
  )
}

export default Footer
