import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNationalCurrencyData } from "../../national_currency/NationalCurrencySlice.ts";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { motion } from "framer-motion";
import useLoadAnimation from "../../hooks/useLoadAnimation.ts";

const ListOfTopCurrencies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currency = useSelector(
    (state: RootState) => state.nationalCurrency.data
  );
  const loading = useSelector(
    (state: RootState) => state.nationalCurrency.loading
  );
  const { itemVariants, transition } = useLoadAnimation();
  const error = useSelector((state: RootState) => state.nationalCurrency.error);

  useEffect(() => {
    dispatch(getNationalCurrencyData());
  }, [dispatch]);
  if (!currency) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div className="min-w-[250px]">Loading...</div>;
  }
  return (
    <div className="flex flex-col  min-w-[250px]  gap-4 border-r-[1px] border-solid border-slate-700  pr-10  ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={transition}
        className=" relative flex flex-col gap-2 backdrop-blur-lg rounded-lg w-[200px] h-[150px] items-center justify-center z-30"
      >
        <div className="top-[0px] left-[0px] absolute w-[50px] bg-[#e96727] h-[80px] rounded-full z-0 blur-lg"></div>{" "}
        {/* <div className="top-[0px] left-[100px] absolute w-[50px] bg-[#2e58e7] h-[80px] rounded-full z-0 blur-lg "></div>{" "} */}
        {/* <div className="top-[90px] left-[80px] absolute w-[50px] bg-[#500073] h-[50px] rounded-full z-0 blur-lg"></div> */}
        <div className=" absolute flex flex-col gap-3 backdrop-blur-lg rounded-lg z-20 w-[200px] h-[150px] bg-[#1f243f4f] items-center justify-center ">
          <img
            src="/images/Flag_of_Europe.svg"
            alt="Flag of Europe"
            className="w-[50px] object-cover rounded-md"
          />
          {/* name */}
          <span>EUR</span>
          {/* price  */}
          <div className="text-sm text-zinc-400">
            {currency.EUR ? (
              <>
                {currency.EUR} <span className="text-zinc-500">USD</span>
              </>
            ) : (
              "loading..."
            )}
          </div>
        </div>
      </motion.div>{" "}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={transition}
        className=" relative flex flex-col gap-2 backdrop-blur-lg rounded-lg w-[200px] h-[150px] items-center justify-center z-30"
      >
        {/* <div className="top-[0px] right-[0px] absolute w-[50px] bg-[#e96727] h-[80px] rounded-full z-0 blur-lg"></div>{" "} */}
        <div className="bottom-[10px]  left-[20px] absolute w-[50px] bg-[#500073] h-[50px] rounded-full z-0 blur-lg"></div>
        <div className=" absolute flex flex-col gap-3 backdrop-blur-lg rounded-lg z-20 w-[200px] h-[150px] bg-[#1f243f4f] items-center justify-center ">
          <img
            src="/images/Flag_of_the_United_Kingdom.svg"
            alt="Flag of Europe"
            className="w-[50px] object-cover rounded-md"
          />
          {/* name */}
          <span>GBP</span>
          {/* price  */}
          <div className="text-sm text-zinc-400">
            {currency.GBP ? (
              <>
                {currency.GBP} <span className="text-zinc-500">USD</span>
              </>
            ) : (
              "loading...."
            )}
          </div>
        </div>
      </motion.div>{" "}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={transition}
        className=" relative flex flex-col gap-2 backdrop-blur-lg rounded-lg w-[200px] h-[150px] items-center justify-center z-30"
      >
        {/* <div className="top-[40px] left-[0px] absolute w-[50px] bg-[#e96727] h-[80px] rounded-full z-0 blur-lg"></div>{" "} */}
        <div className="bottom-[0px] right-[0px] absolute w-[50px] bg-[#2e58e7] h-[80px] rounded-full z-0 blur-lg "></div>{" "}
        <div className=" absolute flex flex-col gap-3 backdrop-blur-lg rounded-lg z-20 w-[200px] h-[150px] bg-[#1f243f4f] items-center justify-center ">
          <img
            src="/images/Flag_of_Canada.svg"
            alt="Flag of Canada"
            className="w-[50px] object-cover rounded-md"
          />
          {/* name */}
          <span>CAD</span>
          {/* price  */}
          <div className="text-sm text-zinc-400">
            {currency.CAD ? (
              <>
                {currency.CAD} <span className="text-zinc-500">USD</span>
              </>
            ) : (
              "loading...."
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ListOfTopCurrencies;
