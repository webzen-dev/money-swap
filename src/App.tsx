import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import ListOfTopCurrencies from "./components/container/ListOfTopCurrencies.tsx";
import SwapContainer from "./components/container/SwapContainer.tsx";
import CryptoConverterPanel from "./components/container/CryptoConverterPanel.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store.ts";
import { getCryptoCurrencyData } from "./crypto_currency/cryptoCurrencySlice.ts";
function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCryptoCurrencyData(1));
  }, [dispatch]);
  return (
    <div className="App bg-zinc-950 min-h-[100vh] py-2">
      <Header />
      {/* container  */}
      <ToastContainer theme="dark" />
      <div className="w-full px-10 flex justify-between   text-slate-200 gap-10 ">
        <ListOfTopCurrencies />
        <SwapContainer />
        <CryptoConverterPanel />
      </div>
    </div>
  );
}

export default App;
