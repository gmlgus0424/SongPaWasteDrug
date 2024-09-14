import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


//화살표 
function NextArrow(props) {
  const {className, style, onClick}= props
  return (
    <div
      className={className}
      style={{...style, display: "block", background: "red", right: "0"}}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const {className, style, onClick}= props
  return (
    <div
      className={className}
      style={{...style, display: "block", background: "green", left: "0"}}
      onClick={onClick}
    />
  )
}



function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
