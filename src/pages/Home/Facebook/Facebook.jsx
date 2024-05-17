/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import Cata from "../../../assets/cate.webp";
// const Facebook = () => {
//   return (
//     <div>
//       <div className="mx-auto  flex justify-center items-center ">
//         <h3 className="text-3xl text-pink-400 uppercase bg-pink-100 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
//           Follow us on facebook{" "}
//           <span className="bg-pink-300 ml-2 px-6 w-68 px-1  py-1 text-white font-semibold  hover:text-pink-400 hover:bg-pink-100">
//             @Kawai Velvett
//           </span>
//         </h3>
//       </div>

//       <div className="flex gap-6 justify-center items-center text-center">
//       <div className="grid grid-cols-6 gap-2">
//   <div className="relative w-68 h-96">
//     <img
//       className="w-full h-full border-8 border-white hover:blur-sm"
//       src={Cata}
//       alt="Your Image"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100">
//       Your Name
//     </div>
//   </div>

//   <div className="relative w-68 h-96">
//     <img
//       className="w-full h-full border-8 border-white hover:blur-sm"
//       src={Cata}
//       alt="Your Image"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100">
//       Your Name
//     </div>
//   </div>

//   <div className="relative w-68 h-96">
//     <img
//       className="w-full h-full border-8 border-white hover:blur-sm"
//       src={Cata}
//       alt="Your Image"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100">
//       Your Name
//     </div>
//   </div>

//   <div className="relative w-68 h-96">
//     <img
//       className="w-full h-full border-8 border-white hover:blur-sm"
//       src={Cata}
//       alt="Your Image"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100">
//       Your Name
//     </div>
//   </div>

//   <div className="relative w-68 h-96">
//     <img
//       className="w-full h-full border-8 border-white hover:blur-sm"
//       src={Cata}
//       alt="Your Image"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100">
//       Your Name
//     </div>
//   </div>
//   <div className="relative w-68 h-96">
//     <img
//       className="w-full h-full border-8 border-white hover:blur-sm"
//       src={Cata}
//       alt="Your Image"
//     />
//     <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100">
//       Your Name
//     </div>
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default Facebook;
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
          <span className="bg-pink-300 ml-2 px-6 w-68 px-1  py-1 text-white font-semibold  hover:text-pink-400 hover:bg-pink-100">
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