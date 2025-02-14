import React from "react";
import { TfiReload } from "react-icons/tfi";
import { motion } from "framer-motion";
import useLoadAnimation from "../../../hooks/useLoadAnimation.ts";
const SwapContainerHeader = () => {
  const { itemVariants, transition } = useLoadAnimation();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={transition}
      className="flex w-full justify-between py-4 px-6"
    >
      <div className="bg-orange-400 text-gray-900 py-1 px-7 font-semibold rounded-md ">
        Swap
      </div>
      {/* swaper button */}
      <button className="bg-none border-none text-2xl cursor-pointer">
        <TfiReload />
      </button>
    </motion.div>
  );
};

export default SwapContainerHeader;
