/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Ayesha from "../../../assets/AyeshaRahman.png";
import Razia from "../../../assets/Razia.png";
import Nafisa from "../../../assets/Nafisa.png";
import Farhan from "../../../assets/Farhan.png";
import Fatima from "../../../assets/Fatima.png";
import Zara from "../../../assets/Zara.png";
import Sadia from "../../../assets/Sadia.png";
import Mariam from "../../../assets/Mariam.png";

const Customer = () => {
  return (
    <div>
      <div className="mx-auto flex justify-center items-center ">
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
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Ayesha Rahman
              </h3>
              <p className="text-gray-700 text-center mb-4">
                The variety of halal-certified makeup products is amazing. It’s
                reassuring to find a site that caters to my needs with such a
                wide selection
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Razia} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Razia Sultana
              </h3>
              <p className="text-gray-700 text-center mb-4">
                The customer service is excellent! They are always ready to help
                with any queries and the return policy is hassle-free.I love how
                reliable this Velvet is
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Nafisa} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Nafisa Islam
              </h3>
              <p className="text-gray-700 text-center mb-4">
                The makeup tutorials and beauty tips available on the site are
                extremely helpful. They have improved my makeup skills
                tremendously!
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Fatima} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Fatima Khan
              </h3>
              <p className="text-gray-700 text-center mb-4">
                The discounts and offers are unbeatable. I always find the best
                deals here compared to other sites. It’s my go-to for all my
                makeup needs.
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Farhan} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Fatima Khan
              </h3>
              <p className="text-gray-700 text-center mb-4">
                The discounts and offers are unbeatable. I always find the best
                deals here compared to other sites. It’s my go-to for all my
                makeup needs.
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Zara} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Zara Hossain
              </h3>
              <p className="text-gray-700 text-center mb-4">
                I appreciate the easy navigation and user-friendly interface of
                the website. It makes shopping a breeze, even for someone like
                me who is not very tech-savvy
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide><div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Mariam} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
              Mariam Ali
              </h3>
              <p className="text-gray-700 text-center mb-4">
              The detailed product descriptions and honest reviews help me make informed decisions before buying any makeup product.
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div></SwiperSlide>
          <SwiperSlide><div className="flex flex-col items-center p-6 bg-white border-8 border-pink-300 shadow-md">
              <img
                src={Sadia} // Replace with actual image path
                alt="Customer"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-300 mb-2">
                Sadia Akhtar
              </h3>
              <p className="text-gray-700 text-center mb-4">
              I love the exclusive Bengali brands featured here. It’s great to support local products, and the quality is top-notch.
              </p>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.234l-5.686 5.423L19.747 24 12 20.413 4.253 24l1.433-9.343L0 9.234l8.332-1.218z" />
                  </svg>
                ))}
              </div>
            </div></SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customer;
