/* eslint-disable no-unused-vars */
import React from "react";
import t1 from "../../../assets/31.png";
import t2 from "../../../assets/32.png";
import t3 from "../../../assets/33.png";
import t4 from "../../../assets/34.png";
const Newly = () => {
  return (
    <div>
      <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-pink-400 uppercase bg-pink-100 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
          Newly released Collection!
        </h3>
      </div>
      <div className="max-w-7xl mx-auto p-0 pb-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* <!-- Card 1 --> */}
        <div className="bg-rose-200 shadow-md  overflow-hidden">
            <img src={t1} alt="Ankle Brace" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-xl text-pink-400 font-bold mb-2">Makeup Brush</h3>
                <p className="text-pink-400 text-sm font-bold">$11</p>
                <button className="mt-4 bg-white text-pink-400 px-8 font-bold py-2 hover:bg-pink-300 hover:text-white">SHOP</button>
            </div>
        </div>
        
        {/* <!-- Card 2 --> */}
        <div className="bg-rose-200 shadow-md overflow-hidden">
            <img src={t2} alt="Urine Bags" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-xl text-pink-400 font-bold mb-2">Eyeliner</h3>
                <p className="text-pink-400 text-sm font-bold">$13</p>
                <button className="mt-4 bg-white text-pink-400 px-8 font-bold py-2 hover:bg-pink-300 hover:text-white">SHOP</button>
            </div>
        </div>
        
        {/* <!-- Card 3 --> */}
        <div className="bg-rose-200 shadow-md  overflow-hidden">
            <img src={t3} alt="LS Belt" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-xl text-pink-400 font-bold mb-2">Purse</h3>
                <p className="text-pink-400 text-sm font-bold">$15</p>
                <button className="mt-4 bg-white text-pink-400 px-8 font-bold py-2 hover:bg-pink-300 hover:text-white">SHOP</button>
            </div>
        </div>
        
        {/* <!-- Card 4 --> */}
        <div className="bg-rose-200 shadow-md overflow-hidden">
            <img src={t4} alt="Heat and Cold Therapy" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-xl text-pink-400 font-bold mb-2">Facewash</h3>
                <p className="text-pink-400 text-sm font-bold">$10</p>
                <button className="mt-4 bg-white text-pink-400 px-8 font-bold py-2 hover:bg-pink-300 hover:text-white">SHOP</button>
            </div>
        </div>

    </div>
</div>
    </div>
  );
};

export default Newly;
