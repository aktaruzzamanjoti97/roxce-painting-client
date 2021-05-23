import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import aliza from "../../../images/aliza.png";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import Testimonial from "../Testimonial/Testimonial";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../global.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


const Testimonials = () => {
  const testimonialData = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Wilson Harry",
      from: "California",
      img: wilson,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Ema Gomez",
      from: "California",
      img: ema,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
      name: "Aliza Farari",
      from: "California",
      img: aliza,
    },
  ];
  return (
    <section className="testimonials my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5
            style={{ color: "#f9865a", fontWeight: "bold" }}
            className="text-uppercase"
          >
            Testimonial
          </h5>
          <h1>
            What Our Client says <br /> About Painters{" "}
          </h1>
        </div>
        <div className="card-deck row">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
                {
                    testimonialData.map(testimonial =>  <SwiperSlide><Testimonial testimonial={testimonial}/></SwiperSlide>)
                }
             
              
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
