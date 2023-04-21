import "./NavBarStyles.css";

import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {

    const[click, setClick] = useState(false);
    const hanleClick = () => setClick(!click);

    const[color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY>=50){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/SocialEditz1">
            <h1>Editze</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/SocialEditz1">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={hanleClick} >
            {click ? <FaTimes size = {20} style = {{color : "#fff"}} /> : <FaBars size = {20} style = {{color : "#fff"}} />}
            
            
        </div>
        
    </div>
  )
}

export default NavBar