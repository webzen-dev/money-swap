import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
const InfoMainCurrency = () => {
  const main = useSelector((state:RootState)=>state.mainCurrency.crypto)
  return (
    <div className="w-full h-[200px] rounded-lg relative">
      <div className="w-[60px] h-[60px] bg-blue-400 bottom-0 right-[70%] blur-lg absolute z-10 rounded-full "></div>
      <div className="w-[60px] h-[60px] bg-fuchsia-400 bottom-[50%] right-[0%] blur-lg absolute z-10 rounded-full "></div>
      <div className="w-[30px] h-[60px] bg-amber-500 absolute z-10 rounded-full"></div>
      <div className="bg-[#1f243f4f] w-full h-full  z-20 absolute backdrop-blur-lg rounded-lg p-2  flex flex-col gap-2"  >
        <span>{main.name} {main.symbol}</span>
        <div className='text-zinc-400'>{main.quote?.USD?.price} USD</div>
      </div>
    </div>
  );
};

export default InfoMainCurrency;
