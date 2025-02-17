import React from "react";
import { TfiReload } from "react-icons/tfi";
import { motion } from "framer-motion";
import useLoadAnimation from "../../../hooks/useLoadAnimation.ts";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { useSelector } from "react-redux";
import { setBase, setTarget } from "../../../calculate/calculateSlice.ts";
const SwapContainerHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const FirstBaseCurrency = useSelector(
    (state: RootState) => state.cryptoCurrency.data[0]
  );
  const LastTargetCurrency = useSelector(
    (state: RootState) => state.cryptoCurrency.data[1]
  );
  const { itemVariants, transition } = useLoadAnimation();
  const handelClick = () => {
    dispatch(setBase(FirstBaseCurrency));
    dispatch(setTarget(LastTargetCurrency));
  };
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
      <button
        className="bg-none border-none text-2xl cursor-pointer"
        onClick={() => handelClick()}
      >
        <TfiReload />
      </button>
    </motion.div>
  );
};

export default SwapContainerHeader;
