import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CryptoCurrencyItemType } from "../crypto_currency/crypto-currency-definitions";

const MainCurrencySlice = createSlice({
  name: "mainCurrency",
  initialState: {
    crypto: {} as CryptoCurrencyItemType,
  },
  reducers: {
    setMainCrypto: (state, action: PayloadAction<CryptoCurrencyItemType>) => {
      state.crypto = action.payload;
    },
  },
});

export const { setMainCrypto } = MainCurrencySlice.actions;
export default MainCurrencySlice.reducer;
