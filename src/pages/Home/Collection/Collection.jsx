import React from "react";
import Cata from "../../../assets/cate.webp"
import { motion } from "framer-motion"
const Collection = () => {
  return (
    <div>
      <div className="mx-auto  flex justify-center items-center ">
        <h3 className="text-3xl text-pink-400 uppercase bg-pink-200 w-full h-24 flex justify-center items-center text-center  font-bold font-serif">
          NEW RELEASED COLLECTION
        </h3>
      </div>
      <div>
        <div className="flex gap-6 justify-center items-center text-center">
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
        </div>

        <div className="flex gap-6 justify-center items-center text-center">
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
          <motion.div className="" whileHover={{scale: 1.06, transition: { duration: 0.9 } }} whileTap={{ scale: 0.9 }} class=" p-4"><img className="w-68 h-96  border-8 border-white" src={Cata} alt="" /></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
