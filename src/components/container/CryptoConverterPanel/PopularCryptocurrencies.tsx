import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { CryptoCurrencyItemType } from "../../../crypto_currency/crypto-currency-definitions.ts";
import { setBase } from "../../../calculate/calculateSlice.ts";
import { motion } from "framer-motion";
import useLoadAnimation from "../../../hooks/useLoadAnimation.ts";
const PopularCryptocurrencies = React.memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.cryptoCurrency
  );
  const { itemVariants, transition } = useLoadAnimation();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleSetBase = (crypto) => {
    dispatch(setBase(crypto));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={transition}
      className=" w-full p-2 py-4 rounded-lg bg-gray-900 flex flex-col gap-2 items-center"
    >
      <div className="text-orange-400 capitalize font-medium">
        Popular Cryptocurrencies
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {data.slice(0, 10).map((crypto: CryptoCurrencyItemType) => (
          <div
            key={crypto.id}
            onClick={() => handleSetBase(crypto)}
            className="flex items-center gap-2 p-2 px-4 rounded-full bg-gray-800 cursor-pointer"
          >
            {crypto.symbol.toUpperCase()}
          </div>
        ))}
      </div>
    </motion.div>
  );
});

export default PopularCryptocurrencies;
