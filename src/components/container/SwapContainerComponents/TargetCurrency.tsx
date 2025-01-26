import React from 'react'
import { FaCaretDown, FaEuroSign } from 'react-icons/fa';
import { TbCurrencyDollar } from 'react-icons/tb';
const TargetCurrency = () => {
    return (  
    <div className="h-[120px] bg-slate-800 rounded-lg flex flex-col  text-white ">
      <div className="h-[50%] w-full flex justify-between p-4 items-center">
        <div className="flex gap-2 items-center cursor-pointer ">
          <img
            src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
            alt="bitcoin"
            className="w-[25px] h-[25px] object-cover"
          />
          <div className="text-xl">BTC</div>
          <div className="text-xl">
            <FaCaretDown />
          </div>
        </div>
        <div>Bitcoin </div>
      </div>{" "}
      <div className="h-[50%] w-full flex justify-between p-4 items-center">
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <TbCurrencyDollar />
          105,139.27<span>USD</span>
        </div>
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <FaEuroSign />
          100,355.26 <span>EUR</span>
        </div>
      </div>
    </div>
    );
}
 
export default TargetCurrency;