/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Cata from "../../../assets/cate.webp";
import Spring from "../../../assets/spring.webp";
import Chary from "../../../assets/chary.webp";
import Sakura from "../../../assets/sakura.webp";
import Peach from "../../../assets/peach.webp";
import Colo from "../../../assets/colors.webp";
import Black from "../../../assets/bl.webp";
import be from "../../../assets/be.webp";
import { motion } from "framer-motion";

const Collection = () => {
  useEffect(() => {
    setTimeout(() => {
      const notification = document.getElementById("purchase_notification");
      if (notification) {
        notification.style.display = "none";
        notification.addEventListener("click", () => {
          const modal = document.getElementById("my_modal_3");
          modal.showModal();
          setTimeout(() => {
            modal.close();
          }, 10000); // Close modal after 10 seconds
        });
      }
    }, 10000); // Hides notification after 10 seconds
  }, []);

  return (
    <div>
      <div className="mx-auto flex justify-center items-center">
        <h3 className="text-xl md:text-3xl text-gray-50 uppercase bg-pink-300 w-full h-24 flex justify-center items-center text-center font-bold font-serif">
          Let's Create Something Beautiful Together
        </h3>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center text-center">
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Cata} alt="Cata" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Spring} alt="Spring" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Chary} alt="Chary" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Sakura} alt="Sakura" />
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center text-center mt-6">
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Peach} alt="Peach" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Colo} alt="Colo" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={Black} alt="Black" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} className="p-4">
            <img className="w-full h-auto md:w-68 md:h-96 border-8 border-white" src={be} alt="be" />
          </motion.div>
        </div>
        <button id="purchase_notification" className="btn rounded-none mt-6 mx-auto">
          Someone just bought an Embroidered Genuine Leather Bag
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Tk 3,219.05</h3>
            <p className="py-4">Grey Erri Embroidered Genuine Leather Bag Add to Wish List</p>
          </div>
        </dialog>
        <button className="cursor-pointer flex justify-center items-center text-center bg-pink-300 px-6 py-3 my-4 text-white font-semibold flex-grow hover:text-pink-400 hover:bg-pink-100 mx-auto">
          Browse All Collections
        </button>
      </div>
    </div>
  );
};

export default Collection;
