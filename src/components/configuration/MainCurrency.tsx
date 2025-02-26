import React, { useState, useEffect, Suspense } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setMainCrypto } from "../../main_currency_selected/mainCurrencySlice.ts";
import useLoadAnimation from "../../hooks/useLoadAnimation.ts";
import { motion } from "framer-motion";
import LoaderOfSelecetBox from "../loaders/LoaderOfSelecetBox.tsx";
const SelectCryptoCurrency = React.lazy(
  () => import("../modals/SelecetCryptoCurrency.tsx")
);
const MainCurrency = () => {
  const CryptoCurrency = useSelector(
    (state: RootState) => state.cryptoCurrency.data
  );
  const { itemVariants, transition } = useLoadAnimation();
  const dispatch = useDispatch<AppDispatch>();
  const [openSelectModal, setOpenSelectModal] = useState<boolean>(false);
  const crypto = useSelector((state: RootState) => state.mainCurrency);
  useEffect(() => {
    if (
      Object.keys(crypto.crypto).length === 0 &&
      CryptoCurrency &&
      CryptoCurrency.length > 1
    ) {
      dispatch(setMainCrypto(CryptoCurrency[0]));
    }
  }, [crypto, dispatch, CryptoCurrency]);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={transition}
      onClick={() => setOpenSelectModal(!openSelectModal)}
      className="relative z-50"
    >
      <Suspense fallback={<LoaderOfSelecetBox />}>
        {openSelectModal && (
          <SelectCryptoCurrency
            setOpenSelectModal={setOpenSelectModal}
            currencyType={"main"}
          />
        )}
      </Suspense>
      <div className="w-[100px]  h-[40px] flex items-center  justify-center rounded-full border-[2px] border-slate-200 border-solid gap-2 cursor-pointer ">
        <div className="uppercase">{crypto?.crypto?.symbol}</div>
        <FaCaretDown />
      </div>
    </motion.div>
  );
};

export default MainCurrency;
