import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { getCryptoCurrencyData } from "../../crypto_currency/cryptoCurrencySlice.ts";
import { IoCloseOutline } from "react-icons/io5";
import _ from "lodash";
import { toast } from "react-toastify";
import { CryptoCurrencyItemType } from "../../crypto_currency/crypto-currency-definitions.ts";
import { setBase, setTarget } from "../../calculate/calculateSlice.ts";
import { setMainCrypto } from "../../main_currency_selected/mainCurrencySlice.ts";
type currencyType = "base" | "target" | "main";
interface Prop {
  currencyType: currencyType;
  setOpenSelectModal: (state: boolean) => void;
}
const SelectCryptoCurrency: React.FC<Prop> = ({
  setOpenSelectModal,
  currencyType,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [start, setStart] = useState<number>(1);
  const ref = useRef<HTMLDivElement | null>(null);
  const toastId = useRef<string | number | null>(null);
  const { data, error, loading } = useSelector(
    (state: RootState) => state.cryptoCurrency
  );
  const nationalCurrency = useSelector(
    (state: RootState) => state.nationalCurrency.data
  );
  const cuterPrice = (price: number): string => price.toFixed(3);
  const handleSetCurrency = (crypto: CryptoCurrencyItemType) => {
    if (currencyType === "base") {
      dispatch(setBase(crypto));
    } else if (currencyType === "target") {
      dispatch(setTarget(crypto));
    } else if (currencyType === "main") {
      dispatch(setMainCrypto(crypto));
    }
    setOpenSelectModal(false);
  };

  useEffect(() => {
    if (loading) {
      if (!toastId.current) {
        toastId.current = toast.loading("⏳ Loading .... ", { theme: "dark" });
      }
    } else {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    }
  }, [loading]);
  useEffect(() => {
    dispatch(getCryptoCurrencyData(start));
  }, [dispatch, start]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    _.debounce(() => {
      const element = ref.current;
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;
      if (scrollHeight - scrollTop <= clientHeight + 50) {
        setStart((prevPage) => prevPage + 25);
      }
    }, 1000),
    []
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  if (error) console.error(error);

  return (
    <div className="w-[100%] flex flex-col gap-10 h-[100vh] py-6 px-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-lg fixed z-90 left-0 right-0 top-0 bottom-0">
      {/* table label */}
      <div className="w-full flex justify-between items-center pb-6 gap-6">
        <div>Rank</div>
        <div className="flex-[3]">Cryptos</div>
        <div className="flex-[1.75]">USD</div>
        <div className="flex-[1.75]">GBP</div>
        <div className="flex-[1.75]">AUD</div>
        <div className="flex-[1.75]">CAD</div>
        <button
          className="bg-slate-600 w-[35px] h-[35px] rounded-lg flex justify-center items-center text-2xl cursor-pointer"
          onClick={() => setOpenSelectModal(false)}
        >
          <IoCloseOutline />
        </button>
      </div>
      <div
        className="w-full flex flex-col gap-6 overflow-auto pr-[40px]"
        ref={ref}
      >
        {data.map((crypto, index) => {
          return (
            <div
              key={index}
              className="w-full flex justify-between items-center border-b-[1px] border-solid border-[rgba(255,255,255,0.5)] pb-6 gap-6 cursor-pointer"
              onClick={() => handleSetCurrency(crypto)}
            >
              <div className="px-4">{crypto.cmc_rank}</div>
              <div className="flex-[3]">
                {crypto.name} ({crypto.symbol})
              </div>
              <div className="flex-[1.75]">
                {cuterPrice(crypto.quote.USD.price)}
              </div>
              <div className="flex-[1.75]">
                {cuterPrice(crypto.quote.USD.price * nationalCurrency.GBP)}
              </div>
              <div className="flex-[1.75]">
                {cuterPrice(crypto.quote.USD.price * nationalCurrency.AUD)}
              </div>
              <div className="flex-[1.75]">
                {cuterPrice(crypto.quote.USD.price * nationalCurrency.CAD)}
              </div>
            </div>
          );
        })}
        {/* {loadingData && <div>Loading...</div>} */}
      </div>
    </div>
  );
};

export default SelectCryptoCurrency;
