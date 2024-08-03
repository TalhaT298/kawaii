/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cata from "../../../assets/cate.webp";
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
    <Swiper watchSlidesProgress={true} slidesPerView={6} className="mySwiper">
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={Cata} alt=""  /></SwiperSlide>
       
        
      </Swiper>
    </div>
    </div>
  );
};

export default Facebook;