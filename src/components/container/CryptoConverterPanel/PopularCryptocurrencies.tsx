import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { CryptoCurrencyItemType } from "../../../crypto_currency/crypto-currency-definitions.ts";
import { getCryptoCurrencyData } from "../../../crypto_currency/cryptoCurrencySlice.ts";
const PopularCryptocurrencies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.cryptoCurrency
  );
  
  useEffect(() => {
    dispatch(getCryptoCurrencyData(1));
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className=" w-full p-2 py-4 rounded-lg bg-gray-900 flex flex-col gap-2 items-center">
      <div className="text-orange-400 capitalize font-medium">
        Popular Cryptocurrencies
      </div>
      <div className="flex flex-wrap justify-center gap-3">

        {data.slice(0, 10).map((crypto: CryptoCurrencyItemType) => (
          <div
            key={crypto.id}
            className="flex items-center gap-2 p-2 px-4 rounded-full bg-gray-800 cursor-pointer"
          >
            {crypto.symbol.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCryptocurrencies;
