import { React } from "react";
import SiteLanguage from "./configuration/SiteLanguage.tsx";
import MainCurrency from "./configuration/MainCurrency.tsx";
const Header = () => {
  return (
    <header className="flex items-center justify-between  px-10 py-6 text-slate-200">
      {/* logo */}
      <div className="bg-gray-900 p-2 rounded-md capitalize cursor-pointer">
        money <span className="text-orange-400">swap</span>
      </div>
      {/* site configuration */}
      <div className='flex gap-2 items-center justify-center'>
        {" "}
        <MainCurrency />
        <SiteLanguage />
      </div>
    </header>
  );
};

export default Header;
