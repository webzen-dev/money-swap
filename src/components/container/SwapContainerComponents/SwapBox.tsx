import React from "react";
import BaseCurrency from "./BaseCurrency.tsx";
import TargetCurrency from "./TargetCurrency.tsx";
import { IoSwapVerticalSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { useDispatch } from "react-redux";
import { setBase, setTarget } from "../../../calculate/calculateSlice.ts";
import useLoadAnimation from "../../../hooks/useLoadAnimation.ts";
import { motion } from "framer-motion";
const SwapBox = () => {
  const { itemVariants, transition } = useLoadAnimation();
  const dispatch = useDispatch<AppDispatch>();
  const { baseCurrency, targetCurrency } = useSelector(
    (state: RootState) => state.calculate
  );
  const handleChange = () => {
    dispatch(setBase(targetCurrency));
    dispatch(setTarget(baseCurrency));
  };
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={itemVariants}
    transition={transition}
      className="relative w-full flex flex-col gap-3 px-6  "
    >
      <BaseCurrency />
      {/* change button  */}
      <button
        type="button"
        onClick={() => handleChange()}
        className="absolute z-20 left-[50%] translate-[-50%] top-[50%] w-[50px] h-[50px] bg-slate-900 flex items-center justify-center rounded-full text-2xl cursor-pointer"
      >
        <IoSwapVerticalSharp />
      </button>
      <TargetCurrency />
    </motion.div>
  );
};

export default SwapBox;
