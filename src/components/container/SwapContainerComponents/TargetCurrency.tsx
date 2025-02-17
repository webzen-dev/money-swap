import React, { useEffect, useState ,Suspense} from "react";
import { FaCaretDown, FaEuroSign } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { CryptoCurrencyItemType } from "../../../crypto_currency/crypto-currency-definitions.ts";
import { useDispatch } from "react-redux";
import { setTarget } from "../../../calculate/calculateSlice.ts";
import LoaderOfSelecetBox from "../../loaders/LoaderOfSelecetBox.tsx";
const SelecetCryptoCurrency =  React.lazy(()=>import("../../modals/SelecetCryptoCurrency.tsx"))
const TargetCurrency = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openSelecetModal, setOpenSelectModal] = useState<boolean>(false);
  const TargetCurrency: CryptoCurrencyItemType = useSelector(
    (state: RootState) => state.calculate.targetCurrency
  );
  const nationalCurrency = useSelector(
    (state: RootState) => state.nationalCurrency.data
  );
  const eth = useSelector((state: RootState) => state.cryptoCurrency.data);
  useEffect(() => {
    if (Object.keys(TargetCurrency).length === 0 && eth && eth.length > 1) {
      dispatch(setTarget(eth[1])); 
    }
  }, [TargetCurrency, eth, dispatch]);
  
  return (
    <div className="h-[120px] bg-slate-800 rounded-lg flex flex-col text-white ">
      <Suspense fallback={<LoaderOfSelecetBox/>}>
      {openSelecetModal && (
        <SelecetCryptoCurrency
          currencyType={"target"}
          setOpenSelectModal={setOpenSelectModal}
        />
      )}
      </Suspense>
      <div
        className="h-[50%] w-full flex justify-between p-4 items-center"
        onClick={() => setOpenSelectModal(!openSelecetModal)}
      >
        <div className="flex gap-2 items-center cursor-pointer ">
          <div className="text-xl">{TargetCurrency?.symbol}</div>
          <div className="text-xl">
            <FaCaretDown />
          </div>
        </div>
        <div>{TargetCurrency?.name}</div>
      </div>
      <div className="h-[50%] w-full flex justify-between p-4 items-center">
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <TbCurrencyDollar />
          {TargetCurrency?.quote?.USD.price}
          <span>USD</span>
        </div>
        <div className="text-2xl flex items-center justify-center gap-1 ">
          <FaEuroSign />
          {TargetCurrency?.quote?.USD.price * nationalCurrency.CAD}
          <span>EUR</span>
        </div>
      </div>
    </div>
  );
};

export default TargetCurrency;
