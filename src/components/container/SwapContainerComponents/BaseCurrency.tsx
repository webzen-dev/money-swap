import React from "react";
import { FaCaretDown, FaEuroSign } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
const BaseCurrency = () => {
  return (
    <div className="h-[120px] bg-indigo-900 rounded-lg flex flex-col  text-white shadow-sm shadow-black">
      <div className="h-[50%] w-full flex justify-between p-4 items-center">
        <div className="flex gap-2 items-center cursor-pointer ">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
            alt="Ethereum"
            className="w-[25px] h-[25px] object-cover"
          />
          <div className="text-xl">ETH</div>
          <div className="text-xl">
            <FaCaretDown />
          </div>
        </div>
        <div>Ethereum</div>
      </div>{" "}
      <div className="h-[50%] w-full flex justify-between p-4 items-center">
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <TbCurrencyDollar />
          3,398.13 <span>USD</span>
        </div>
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <FaEuroSign />
          3,243.51 <span>EUR</span>
        </div>
      </div>
    </div>
  );
};

export default BaseCurrency;
