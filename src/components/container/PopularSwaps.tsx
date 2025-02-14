import React from "react";
import { motion } from "framer-motion";
import { IoSwapHorizontalOutline } from "react-icons/io5";
import useLoadAnimation from "../../hooks/useLoadAnimation.ts";
const PopularSwaps = () => {
  const { itemVariants, transition } = useLoadAnimation();
  return (
    <motion.div
      variants={itemVariants}
      transition={transition}
      animate="visible"
      initial="hidden"
      className=" flex w-full flex-col px-6 pb-8 py-4 gap-4 capitalize"
    >
      {/* title */}
      <div className="text-orange-400 flex justify-center items-center font-bold">
        Popular crypto swap
      </div>
      {/* Popular List */}
      <div className="flex flex-wrap gap-4  justify-center">
        {/* Popular Item */}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
        <div className="px-6 flex  items-center justify-center gap-2 cursor-pointer text-slate-300 py-1 bg-slate-600 rounded-2xl uppercase hover:opacity-50 active:bg-slate-400 active:text-slate-900 transition-all delay-40 duration-100 ease-in-out">
          BTC <IoSwapHorizontalOutline /> ETH
        </div>{" "}
      </div>
    </motion.div>
  );
};

export default PopularSwaps;
