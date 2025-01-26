import { combineReducers } from "redux";
import NationalCurrencyReducer from "../national_currency/NationalCurrencySlice.ts";
import cryptoCurrencyReducer from "../crypto_currency/cryptoCurrencySlice.ts";

const rootReducer = combineReducers({
  nationalCurrency: NationalCurrencyReducer,
  cryptoCurrency: cryptoCurrencyReducer,
});

export default rootReducer;
