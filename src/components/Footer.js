import React from 'react'
import "./FooterStyles.css"

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                    <div>
                        <p>Jharkhand, India</p>
                    </div>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"fff" , marginRight: "2rem"}}/>
                    eeditees@gmail.com</h4>
                    
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>We at Editz create awesome and audience targeting content for social media.</p>
                <div className="social">
                <a href="https://www.instagram.com/videoeditor_pravin/" target="_blank"><FaInstagram size={20} style={{color:"fff" , marginRight: "2rem"}}/></a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer