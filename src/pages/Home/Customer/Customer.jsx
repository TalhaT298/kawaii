/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Ayesha from "../../../assets/AyeshaRahman.png"

const Customer = () => {
  return (
    <div>
      <div className='mx-auto flex justify-center items-center '>
        <h3 className="text-3xl text-gray-50 uppercase bg-pink-300 w-full h-24 flex justify-center items-center text-center font-bold font-serif">
          Client Feedback
        </h3>
      </div>
      <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Ayesha} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">Ayesha Rahman</h3>
              <p className="text-gray-700 text-center mb-4">
              The variety of halal-certified makeup products is amazing. It’s reassuring to find a site that caters to my needs with such a wide selection
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z"/>
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide><div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Ayesha} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">Ayesha Rahman</h3>
              <p className="text-gray-700 text-center mb-4">
              The variety of halal-certified makeup products is amazing. It’s reassuring to find a site that caters to my needs with such a wide selection
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z"/>
                  </svg>
                ))}
              </div>
            </div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Customer;
