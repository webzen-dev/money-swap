import React from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import ListOfTopCurrencies from "./components/container/ListOfTopCurrencies.tsx";

function App() {
  return (
    <div className="App bg-zinc-950 h-[100vh]">
      <Header />
      {/* container  */}
      <div className="w-full px-10 flex justify-between  text-slate-200 ">
        <ListOfTopCurrencies />
      </div>
    </div>
  );
}

export default App;
