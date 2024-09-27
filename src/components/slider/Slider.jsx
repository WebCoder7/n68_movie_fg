import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import panda from "../../assets/panda.png";
import { useState } from "react";
import "./Slider.css"; 

function Slider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div  >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        <SwiperSlide>
          <img src={panda} alt="Panda" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="panda2" src={panda} alt="King Kong" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="custom-slide-image"
            src={panda}
            alt="Cinema Market"
          />
        </SwiperSlide>
      </Swiper>

      <div className="slider-controls">
        <button
          className="control-button"
          onClick={() => swiperInstance?.slidePrev()}
        >
          {"<"}
        </button>


        <button
          className="control-button"
          onClick={() => swiperInstance?.slideNext()}
        >
          {">"}
        </button>

      </div>
    </div>
  );
}

export default Slider;
