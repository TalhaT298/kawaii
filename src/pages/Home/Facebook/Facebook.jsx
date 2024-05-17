/* eslint-disable no-unused-vars */
import React from "react";
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

      <div className="flex gap-6 justify-center items-center text-center">
          <div 
          >
            <img
              className="w-68 h-96  border-8 border-white"
              src={Cata}
              alt=""
            />
          </div>
          
        </div>

    </div>
  );
};

export default Facebook;
