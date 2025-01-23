import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
interface Crypto {
  image: string;
  name: string;
  symbol: string;
}
// demo data
const MainCurrency = () => {
  const [crypto, setCrypto] = useState<Crypto[]>([]);

  const fetchData = async () => {
    try {
      const data = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1"
      );
      setCrypto(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (crypto.length === 0) return <div>Loading...</div>;
  return (
    <div>
      <div className="w-[100px] h-[40px] flex items-center  justify-center rounded-full border-[2px] border-slate-200 border-solid gap-2 cursor-pointer ">
        <img
          src={crypto[0].image}
          alt={crypto[0].name}
          className="w-[25px] h-[25px] object-cover"
        />
        <div className="uppercase">{crypto[0].symbol}</div>
        <FaCaretDown />
      </div>
    </div>
  );
};

export default MainCurrency;
