import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import SelectCryptoCurrency from "../modals/SelecetCryptoCurrency.tsx";
import { useDispatch } from "react-redux";
import { setMainCrypto } from "../../main_currency_selected/mainCurrencySlice.ts";
const MainCurrency = () => {
  const CryptoCurrency = useSelector(
    (state: RootState) => state.cryptoCurrency.data
  );
  const dispatch = useDispatch<AppDispatch>();
  const [openSelectModal, setOpenSelectModal] = useState<boolean>(false);
  const crypto = useSelector((state: RootState) => state.mainCurrency);
  useEffect(() => {
    if (Object.keys(crypto.crypto).length === 0 && CryptoCurrency && CryptoCurrency.length > 1) {
      dispatch(setMainCrypto(CryptoCurrency[0]));
    }
  }, [crypto, dispatch, CryptoCurrency]);
  return (
    <div
      onClick={() => setOpenSelectModal(!openSelectModal)}
      className="relative z-50"
    >
      {openSelectModal && (
        <SelectCryptoCurrency
          setOpenSelectModal={setOpenSelectModal}
          currencyType={"main"}
        />
      )}
      <div className="w-[100px]  h-[40px] flex items-center  justify-center rounded-full border-[2px] border-slate-200 border-solid gap-2 cursor-pointer ">
        <div className="uppercase">{crypto?.crypto?.symbol}</div>
        <FaCaretDown />
      </div>
    </div>
  );
};

export default MainCurrency;
