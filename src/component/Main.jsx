import React from "react";
import logo from "../assets/images/navbar_images/logo.png";
import Facebook from "../assets/images/navbar_images/Facebook.png";
import Instagram from "../assets/images/navbar_images/Instagram.png";
import Twitter from "../assets/images/navbar_images/Twitter.png";
import Clock from "../assets/images/banner_image/Clock.png";
import Heart from "../assets/images/banner_image/Heart.png";
import Comment from "../assets/images/top_section_images/Comment.png";
import banner_img from "../assets/images/banner_image/banner_img.png";
import style_women from "../assets/images/top_section_images/style_women.png";
import Card from "../assets/images/top_section_images/Card.png";
import photo from '../assets/images/top_section_images/photo.png'
import photo_2 from '../assets/images/top_section_images/photo_2.png'
import photo_3 from '../assets/images/top_section_images/photo_3.png'
import Quote from '../assets/images/top_section_images/Quote.png'
import profile from '../assets/images/top_section_images/profile.png'
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
          <li>
            <a href="">Sence</a>
          </li>
        </div>
        <div className="right_section">
          {" "}
          <div className="social_media_icons_container">
            <li>
              <a href="">
                {" "}
                <img src={Facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={Instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={Twitter} alt="" />
              </a>
            </li>
          </div>
        </div>
      </nav>
      <main className="banner_container ">
        <div className="banner_image_container img-fluid">
          <img src={banner_img} alt="" />
        </div>
        <div className="banner_image_decription_container w-50">
          <h3 className="w-75">Stunning barefooted woman of 2023</h3>
          <p className="">
            In the heart of a chic urban studio, the atmosphere buzzed with
            excitement as a trendy fur coat took center stage during a vibrant
            photoshoot.
          </p>
          <div className="banner_date">
            <li>
              <img src={Clock} alt="clock" /> 20 July 2023
            </li>
            <li>
              {" "}
              <img src={Heart} alt="heart" /> 830
            </li>
            <li>
              {" "}
              <img src={Comment} alt="comment" />
              19
            </li>
          </div>
          <div className="banner_read_more_button">
            <button className="banner_button">READ MORE </button>
          </div>
        </div>
      </main>
      <section className="top_section_container">
        <div className="" >
          <div className="row">
            <div className="col-lg-9">
              <div className="left_section_container">
                <div className="">
                  <div className="top_left_section_container">
                    <div className="top_left_section">
                      <div className="top_left_top">
                        <div className="top_left_card1">
                          <div className="top_left_card1_left">
                            <p>
                              Stylish woman in summer outfit isolated posing in
                              fashion trend isolated
                            </p>
                            <p>
                              In this captivating scene, a stylish woman stands
                              confidently against a pristine backdrop, capturing
                              the essence of summer's allure. Bathed in the
                              gentle sunlight, she emanates an air of effortless
                              chic. Her outfit is a harmonious blend of
                              contemporary trends and timeless elegance,
                              perfectly attuned to the vibrant season.
                            </p>
                            <button type="button" class="btn btn-primary">
                              Read more
                            </button>
                          </div>
                          <div className="top_left_card1_rigth">
                            <img src={style_women} className="" alt="" />
                          </div>
                        </div>
                        <div className="top_left_card2">
                          <div className="card2">
                            <img src={Card}  alt="card" />
                          </div>

                        </div>
                      </div>
                      <div className="top_left_bottom">

                        <div className="card2">
                          <img src={photo} className="img-fluid" alt="" />
                          <p>Fashion</p>
                          <p>Stylish young man out in town</p>
                          <p>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</p>
                          <div className="card_comment">
                            <li>3 hours ago</li>
                            <li>12</li>
                          </div>
                        </div>
                        <div className="card2">
                          <img src={photo_2} className="img-fluid" alt="" />
                          <p>Fashion</p>
                          <p>Aptkdoe Smartwatch Women Men </p>
                          <p>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</p>
                          <div className="card_comment">
                            <li>3 hours ago</li>
                            <li>12</li>
                          </div>
                        </div>
                        <div className="card2">
                          <img src={photo_3} className="img-fluid" alt="" />
                          <p>Fashion</p>
                          <p>Anker 325 power bank</p>
                          <p>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</p>
                          <div className="card_comment">
                            <li>3 hours ago</li>
                            <li>12</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right_section_container">
                <div className="card3">
                  <div className="wireless_earbuds_container">
                    <img src={Quote} className="img-fluid" alt="Quote" />
                    <p>Wireless Earbuds</p>
                  </div>
                  <div className="wireless_earbuds_container_paragraph">
                    
                    <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  </div>
                  <div className="wireless_earbuds_name_container">
                    <div className="wireless_earbuds_name_img">
                      <img src={profile}  alt="" />
                    </div>
                    <div className="wireless_earbuds_name">
                      <li>Nina Markez</li>
                      <li>Programmer</li>
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <div className="wireless_earbuds_container">
                    <img src={Quote} className="img-fluid" alt="Quote" />
                    <p>Wireless Earbuds</p>
                  </div>
                  <div className="wireless_earbuds_container_paragraph">
                    
                    <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  </div>
                  <div className="wireless_earbuds_name_container">
                    <div className="wireless_earbuds_name_img">
                      <img src={profile}  alt="" />
                    </div>
                    <div className="wireless_earbuds_name">
                      <li>Nina Markez</li>
                      <li>Programmer</li>
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <div className="wireless_earbuds_container">
                    <img src={Quote} className="img-fluid" alt="Quote" />
                    <p>Wireless Earbuds</p>
                  </div>
                  <div className="wireless_earbuds_container_paragraph">
                    
                    <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  </div>
                  <div className="wireless_earbuds_name_container">
                    <div className="wireless_earbuds_name_img">
                      <img src={profile}  alt="" />
                    </div>
                    <div className="wireless_earbuds_name">
                      <li>Nina Markez</li>
                      <li>Programmer</li>
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <div className="wireless_earbuds_container">
                    <img src={Quote} className="img-fluid" alt="Quote" />
                    <p>Wireless Earbuds</p>
                  </div>
                  <div className="wireless_earbuds_container_paragraph">
                    
                    <p>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</p>
                  </div>
                  <div className="wireless_earbuds_name_container">
                    <div className="wireless_earbuds_name_img">
                      <img src={profile}  alt="" />
                    </div>
                    <div className="wireless_earbuds_name">
                      <li>Nina Markez</li>
                      <li>Programmer</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <article >
        <div className="fashion_summary_container">

<p>"Unveiling Timeless Elegance: Exploring the Allure of Vintage Fashion"</p>
<li>The Essence of Time Travel</li>
<li>Vintage fashion allows us to transcend eras, stepping into the shoes of those who came before us. Each piece tells a story, offering a glimpse into the cultural and societal norms of its time. From the flapper dresses of the 1920s that embodied the spirit of rebellion to the tailored suits of the 1960s that epitomized sophistication, every era has its signature style waiting to be revived.</li>
<li>Quality Beyond Compare</li>
<li>One of the hallmarks of vintage fashion is the unparalleled craftsmanship that went into creating garments that stood the test of time. In a world where fast fashion often prioritizes quantity over quality, vintage pieces remind us of an era when attention to detail and durability were paramount. The feel of a vintage silk dress or the weight of a hand-sewn coat is a testament to the dedication of artisans of yesteryears.</li>
<li>Eclectic Personal Style</li>
<li>Embracing vintage fashion allows us to curate a wardrobe that's uniquely ours. Mixing and matching vintage pieces with contemporary items creates a personal style that defies categorization. From pairing a 1970s bohemian blouse with modern jeans to accessorizing a little black dress with vintage brooches, the possibilities are endless and the results are often strikingly original.</li>
<li>Sustainable Chic</li>
<li>




As the world embraces sustainability, vintage fashion takes center stage as a prime example of eco-conscious style. Choosing pre-loved clothing not only reduces the demand for new production but also breathes new life into garments that might otherwise be forgotten. It's a nod to slow fashion, a movement that encourages thoughtful consumption and reduces the impact on the environment.</li>
        </div>
      </article>
    </div>
  );
};

export default Main;
