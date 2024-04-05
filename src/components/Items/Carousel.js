import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "../../assets/store"
import { Link } from 'react-router-dom';

export const Carousel = (props) => {
  const items = data.filter((item, ind) => item.Category === props.Category);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
    {

      breakpoint:1000,
      settings:{
        slidesToShow:2,
      }
    },{
      breakpoint: 768, // Adjust breakpoint as needed
      settings: {
        slidesToShow: 1,
      },
    }
  ]
  };

  return (
    <Slider {...settings}>

      {
      items.map((item, ind) =>{
        return (
          <div class="container">
        <Link to={`/products/${item.Name}`} class="card mx-3 my-3" style={{ width: "20rem", height: "33rem", justifyContent: "center", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
          <img src={item.Image} class="card-img" alt="..." style={{ height: "auto", width: "100%", objectFit: "cover" }} />
          <div class="card-body position-absolute bottom-0 " >
            <p class="card-text">{item.Name}</p>
            <p class="card-text">$ {item.Price}</p>
          </div>
        </Link>
        </div>
      )})
      }
    </Slider>
  );
};

