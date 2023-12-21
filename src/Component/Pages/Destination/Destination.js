import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Destination.css";

import image01 from "../../../asset/card-image.png";
import image02 from "../../../asset/card-image-1.png";
import image03 from "../../../asset/card-image-2.png";


const Destination = () => {
  return (
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={-300}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <div className="cardImageSlide">
              <img src={image01} alt="" />
            </div>
            <div>
              <h2>Harvard University</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="card">
            <div className="cardImageSlide">
              <img src={image02} alt="" />
            </div>
            <div>
              <h2>Harvard University</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderOne">
          <div className="card">
            <div className="cardImageSlide">
              <img src={image03} alt="" />
            </div>
            <div>
              <h2>Harvard University</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderTwo">
          <div className="card">
            <div className="cardImageSlide">
              <img src={image01} alt="" />
            </div>
            <div>
              <h2>Harvard University</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sliderThree">
          <div className="card">
            <div className="cardImageSlide">
              <img src={image01} alt="" />
            </div>
            <div>
              <h2>Harvard University</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default Destination;
