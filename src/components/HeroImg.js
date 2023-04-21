import "./HeroImgStyles.css"

import React from 'react'
import introImg from "../assets/IntroImg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={introImg} alt="introImg" />
        </div>
        <div className="content">
          <p>We create awesome content for your social media.</p>
          <h1>Editz</h1>
          <Link to="/project" className="btn">Demo</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default HeroImg