import React from "react";
import InfoMainCurrency from "./CryptoConverterPanel/InfoMainCurrency.tsx";
import PopularCryptocurrencies from "./CryptoConverterPanel/PopularCryptocurrencies.tsx";

const CryptoConverterPanel = () => {
  return (
    <div className="flex-[0.3] flex-col flex gap-4">
      <InfoMainCurrency />
      <PopularCryptocurrencies/>
    </div>
  );
};

export default CryptoConverterPanel;
