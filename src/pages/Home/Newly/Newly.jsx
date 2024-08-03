/* eslint-disable no-unused-vars */
import React from "react";

const Newly = () => {
  return (
    <div>
      <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-pink-400 uppercase bg-pink-100 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
          Newly released Collection!
        </h3>
      </div>
      <div className="max-w-7xl mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* <!-- Card 1 --> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Ankle Brace" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Ankle Brace</h3>
                <p className="text-blue-600 text-xl font-bold">Price: $11</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">SHOP</button>
            </div>
        </div>
        
        {/* <!-- Card 2 --> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Urine Bags" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Urine Bags</h3>
                <p className="text-blue-600 text-xl font-bold">Price: $13</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">SHOP</button>
            </div>
        </div>
        
        {/* <!-- Card 3 --> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="LS Belt" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">LS Belt</h3>
                <p className="text-blue-600 text-xl font-bold">Price: $15</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">SHOP</button>
            </div>
        </div>
        
        {/* <!-- Card 4 --> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="Heat and Cold Therapy" className="w-full h-48 object-cover"></img>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Heat and Cold Therapy</h3>
                <p className="text-blue-600 text-xl font-bold">Price: $10</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">SHOP</button>
            </div>
        </div>

    </div>
</div>
    </div>
  );
};

export default Newly;
