import React from "react";
import Slider from "react-slick";

export default function carrosselManual({ children, settings = {} }) {
  const configs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings,
  };
  return <Slider {...configs}>{children}</Slider>;
}
