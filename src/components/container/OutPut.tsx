import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { calculate } from "../../calculate/calculateSlice.ts";
import useLoadAnimation from "../../hooks/useLoadAnimation.ts";
import { motion } from "framer-motion";
const OutPut = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { baseCurrency, targetCurrency, convertedAmount } = useSelector(
    (state: RootState) => state.calculate
  );
  const { itemVariants, transition } = useLoadAnimation();
  useEffect(() => {
    if (baseCurrency && targetCurrency) {
      dispatch(calculate());
    }
  }, [baseCurrency, targetCurrency, dispatch]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={transition}
      className="py-4 flex justify-center  items-center gap-2 border-b-[1px] border-solid border-slate-700 mx-6"
    >
      {/* 1 <span>ETH</span> = 0.03226732 <span>BTC</span> */}1{" "}
      {baseCurrency.symbol} = {convertedAmount} {targetCurrency.symbol}
      {/* output -_- );  */}
    </motion.div>
  );
};

export default OutPut;
