    import React, { Component } from "react";
    import Slider from 'react-slick';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import img1 from '../assets/maxresdefault.jpg';
    import img2 from '../assets/f1-o-filme.png.webp';
    import img3 from '../assets/unnamed-45.jpg';



    export default function MainCarousel() {
      const settings = {
        dots: true,
        centerMode: true,
        centerPadding: '50px', // Adjust as needed
        slidesToShow: 1, // Or 1, depending on desired effect
        responsive: [

        ]
      };

      return (
        <Slider {...settings}>
          <div>
            <img src={img1} alt=""/>
          </div>
          <div>
            <img src={img2} alt=""/>
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </Slider>
      );
    }

    