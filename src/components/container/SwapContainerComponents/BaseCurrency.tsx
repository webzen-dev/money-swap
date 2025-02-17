import React, { useEffect, useState, Suspense } from "react";
import { FaCaretDown, FaEuroSign } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import { useSelector } from "react-redux";
import { AppDispatch, type RootState } from "../../../redux/store.ts";
import { useDispatch } from "react-redux";
import { setBase } from "../../../calculate/calculateSlice.ts";
import LoaderOfSelecetBox from "../../loaders/LoaderOfSelecetBox.tsx";
const SelecetCryptoCurrency = React.lazy(
  () => import("../../modals/SelecetCryptoCurrency.tsx")
);

const BaseCurrency = () => {
  const dispatch = useDispatch<AppDispatch>();
  const baseCurrency = useSelector(
    (state: RootState) => state.calculate.baseCurrency
  );
  const nationalCurrency = useSelector(
    (state: RootState) => state.nationalCurrency.data
  );
  const [openSelecetModal, setOpenSelectModal] = useState<boolean>(false);
  const btc = useSelector((state: RootState) => state.cryptoCurrency.data);
  useEffect(() => {
    if (Object.keys(baseCurrency).length === 0 && btc && btc.length > 1) {
      dispatch(setBase(btc[0]));
    }
  }, [baseCurrency, dispatch, btc]);
  return (
    <div className="h-[120px] bg-indigo-900 rounded-lg flex flex-col  text-white shadow-sm shadow-black">
      <Suspense fallback={<LoaderOfSelecetBox />}>
        {openSelecetModal && (
          <SelecetCryptoCurrency
            currencyType={"base"}
            setOpenSelectModal={setOpenSelectModal}
          />
        )}
      </Suspense>
      <div
        className="h-[50%] w-full flex justify-between p-4 items-center "
        onClick={() => setOpenSelectModal(!openSelecetModal)}
      >
        <div className="flex gap-2 items-center cursor-pointer ">
          <div className="text-xl">{baseCurrency.symbol}</div>
          <div className="text-xl">
            <FaCaretDown />
          </div>
        </div>
        <div>{baseCurrency.name}</div>
      </div>{" "}
      <div className="h-[50%] w-full flex justify-between p-4 items-center">
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <TbCurrencyDollar />
          {baseCurrency.quote?.USD.price} <span>USD</span>
        </div>
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <FaEuroSign />
          {baseCurrency.quote?.USD.price * nationalCurrency.CAD}
          <span>EUR</span>
        </div>
      </div>
    </div>
  );
};

export default BaseCurrency;
