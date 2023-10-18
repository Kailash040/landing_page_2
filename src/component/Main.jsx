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
      <main className="banner_container">
<div className="banner_image_container"></div>
<div className="banner_image_decription_container container-sm">
  <h3>Stunning barefooted woman of 2023</h3>
  <p>In the heart of a chic urban studio, the atmosphere buzzed with excitement as a trendy fur coat took center stage during a vibrant photoshoot.</p>
  <div className="banner_date">
    <li>20 July 2023</li>
    <li>830</li>
    <li>19</li>
  </div>
  <div className="banner_read_more_button">
    <button className="banner_button">READ MORE </button>
  </div>
</div>

      </main>
    </div>
  );
};

export default Main;
