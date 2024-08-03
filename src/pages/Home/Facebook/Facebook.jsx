/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import c1 from "../../../assets/11.png";
import c2 from "../../../assets/12.png";
import c3 from "../../../assets/13.png";
import c4 from "../../../assets/14.png";
import c5 from "../../../assets/15.png";
import c6 from "../../../assets/16.png";
import c7 from "../../../assets/17.png";
import c8 from "../../../assets/18.png";
import c9 from "../../../assets/19.png";
import c10 from "../../../assets/20.png";
import c11 from "../../../assets/21.png";
import c12 from "../../../assets/22.png";
import c13 from "../../../assets/23.png";
const Facebook = () => {
  return (
    <div>
      <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-pink-400 uppercase bg-pink-100 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
          Follow us on facebook{" "}
          <span className="bg-pink-300 ml-2 px-6 w-68   py-1 text-white font-semibold  hover:text-pink-400 hover:bg-pink-100">
            @Kawai Velvett
          </span>
        </h3>
      </div>
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={6}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c13} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Facebook;
