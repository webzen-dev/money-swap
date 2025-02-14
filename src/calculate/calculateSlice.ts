/* eslint-disable @typescript-eslint/no-redeclare */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CryptoCurrencyItemType } from "../crypto_currency/crypto-currency-definitions";

interface initialState {
  baseCurrency: CryptoCurrencyItemType;
  targetCurrency: CryptoCurrencyItemType;
  exchangeRate: number;
  Amount: number;
  convertedAmount: number;
}

const initialState: initialState = {
  baseCurrency: {} as CryptoCurrencyItemType,
  targetCurrency: {} as CryptoCurrencyItemType,
  exchangeRate: 1,
  Amount: 1,
  convertedAmount: 1,
};

const CalculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    setBase: (state, action: PayloadAction<CryptoCurrencyItemType>) => {
      state.baseCurrency = action.payload;
    },
    setTarget: (state, action: PayloadAction<CryptoCurrencyItemType>) => {
      state.targetCurrency = action.payload;
    },
    calculate: (state) => {
      // state.Amount = 1;
      if (state.baseCurrency.quote && state.targetCurrency.quote) {
        state.exchangeRate =
          state.baseCurrency.quote.USD.price / state.targetCurrency.quote.USD.price;
        state.convertedAmount = state.Amount * state.exchangeRate;
      }
    },
  },
});

export const { setBase, setTarget, calculate } = CalculateSlice.actions;
export default CalculateSlice.reducer;
