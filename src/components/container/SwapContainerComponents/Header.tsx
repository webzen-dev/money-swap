import React from "react";
import { TfiReload } from "react-icons/tfi";
const SwapContainerHeader = () => {
  return (
    <div className="flex w-full justify-between py-4 px-6">
      <div className="bg-orange-400 text-gray-900 py-1 px-7 font-semibold rounded-md ">
        Swap
      </div>
      {/* swaper button */}
      <button className="bg-none border-none text-2xl cursor-pointer">
        <TfiReload />
      </button>
    </div>
  );
};

export default SwapContainerHeader;
