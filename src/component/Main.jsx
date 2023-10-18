import React from "react";
import logo from "../assets/images/navbar_images/logo.png";
import Facebook from '../assets/images/navbar_images/Facebook.png'
import Instagram from '../assets/images/navbar_images/Instagram.png'
import Twitter from '../assets/images/navbar_images/Twitter.png'
const Main = () => {
  return (
    <div className="main_container">
      <nav className="navbar container ">
        <div className="left_section">
          <div className="navbar_image">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="mid_section">
         
            <li>
              <a href="">Home</a>
              </li>
            <li>
              <a href="">Fashion</a>
              </li>
            <li>
              <a href="">Health</a>
              </li>
            <li>
              <a href="">Tech</a>
              </li>
            <li><a href="">Sence</a></li>
          
        </div>
        <div className="right_section"> <div className="social_media_icons_container">
          <li><a href=""> <img src={Facebook} alt="facebook" /></a></li>
          <li><a href=""> <img src={Instagram} alt="" /></a></li>
          <li><a href=""><img src={Twitter} alt="" /></a></li></div></div>
      </nav>
    </div>
  );
};

export default Main;
