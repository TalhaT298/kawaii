import React from "react";

const Newly = () => {
  return (
    <div>
      <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-pink-400 uppercase bg-pink-100 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
        Newly released Collection!
        </h3>
      </div>
      <div className="py-4">
        <div className="flex gap-6 justify-center items-center text-center">
          <div
            className=""
            whileHover={{ scale: 1.06, transition: { duration: 0.9 } }}
            whileTap={{ scale: 0.9 }}
            class=" p-4"
          >
            <img
              className="w-68 h-96  border-8 border-white"
              // src={Cata}
              alt=""
            />
          </div>
          <div
            className=""
            whileHover={{ scale: 1.06, transition: { duration: 0.9 } }}
            whileTap={{ scale: 0.9 }}
            class=" p-4"
          >
            <img
              className="w-68 h-96  border-8 border-white"
              // src={Spring}
              alt=""
            />
          </div>
          <div
            className=""
            whileHover={{ scale: 1.06, transition: { duration: 0.9 } }}
            whileTap={{ scale: 0.9 }}
            class=" p-4"
          >
            <img
              className="w-68 h-96  border-8 border-white"
              // src={Chary}
              alt=""
            />
          </div>
          <div
            className=""
            whileHover={{ scale: 1.06, transition: { duration: 0.9 } }}
            whileTap={{ scale: 0.9 }}
            class=" p-4"
          >
            <img
              className="w-68 h-96  border-8 border-white"
              // src={Sakura}
              alt=""
            />
          </div>
        </div>
        <button className="cursor-pointer flex justify-center items-center text-center bg-pink-300 px-6 py-3 text-white font-semibold flex-grow hover:text-pink-400 hover:bg-pink-100 mx-auto">
          View All
        </button>
      </div>
    </div>
  );
};

export default Newly;
