import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../assets/portfolio_lisa.mp4";
import gif from "../assets/video_gif.gif";
import carousel1 from "../assets/welcome_1.png";
import carousel2 from "../assets/welcome_2.png";
import carousel3 from "../assets/welcome_3.png";
import carousel4 from "../assets/welcome_4.png";

class Home extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <img src={carousel1} />
            </div>
            <div>
              <img src={carousel2} />
            </div>
            <div>
              <img src={carousel3} />
            </div>
            <div>
              <img src={carousel4} />
            </div>
          </Slider>
        </div>
        <div className="bg_wrap">
          <video
            className="bgvid"
            poster={gif}
            autoplay="true"
            loop="true"
            muted="true"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default Home;
