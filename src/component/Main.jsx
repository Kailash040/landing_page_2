import React from "react";
import logo from "../assets/images/navbar_images/logo.png";
import Facebook from '../assets/images/navbar_images/Facebook.png'
import Instagram from '../assets/images/navbar_images/Instagram.png'
import Twitter from '../assets/images/navbar_images/Twitter.png'
import Clock from '../assets/images/banner_image/Clock.png'
import Heart from '../assets/images/banner_image/Heart.png'
import Comment from '../assets/images/top_section_images/Comment.png'
import banner_img from '../assets/images/banner_image/banner_img.png'
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
      <main className="banner_container ">
<div className="banner_image_container img-fluid"><img src={banner_img} alt="" /></div>
<div className="banner_image_decription_container w-50">
  <h3 className="w-75">Stunning barefooted woman of 2023</h3>
  <p className="">In the heart of a chic urban studio, the atmosphere buzzed with excitement as a trendy fur coat took center stage during a vibrant photoshoot.</p>
  <div className="banner_date">
    <li><img src={Clock} alt="clock" /> 20 July 2023</li>
    <li> <img src={Heart} alt="heart" /> 830</li>
    <li> <img src={Comment} alt="comment" />19</li>
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
