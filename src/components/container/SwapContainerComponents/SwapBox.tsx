import React from "react";
import BaseCurrency from "./BaseCurrency.tsx";
import TargetCurrency from "./TargetCurrency.tsx";
import { IoSwapVerticalSharp } from "react-icons/io5";
const SwapBox = () => {
  return (
    <div className="relative w-full flex flex-col gap-3 px-6  ">
      <BaseCurrency />
      {/* change button  */}
      <button className="absolute z-20 left-[50%] translate-[-50%] top-[50%] w-[50px] h-[50px] bg-slate-900 flex items-center justify-center rounded-full text-2xl cursor-pointer">
        <IoSwapVerticalSharp />
      </button>
      <TargetCurrency />
    </div>
  );
};

export default SwapBox;
