import React from "react";
import Cata from "../../../assets/cate.webp"

const Collection = () => {
  return (
    <div>
      <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-pink-400 uppercase bg-pink-200 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
          NEW RELEASED COLLECTION
        </h3>
      </div>
      <div>
        <div class="flex">
          <div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} class="w-1/4 p-4"><img src={Cata} alt="" /></div>
          <div class="w-1/4 p-4"><img src={Cata} alt="" /></div>
          <div class="w-1/4 p-4"><img src={Cata} alt="" /></div>
          <div class="w-1/4 p-4"><img src={Cata} alt="" /></div>
          
        </div>
      </div>
    </div>
  );
};

export default Collection;
