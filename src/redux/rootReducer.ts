import { combineReducers } from "redux";
import NationalCurrencyReducer from "../national_currency/NationalCurrencySlice.ts";
import cryptoCurrencyReducer from "../crypto_currency/cryptoCurrencySlice.ts";
import CalculateReducer from "../calculate/calculateSlice.ts";
import MainCurrencyReducer from "../main_currency_selected/mainCurrencySlice.ts";
const rootReducer = combineReducers({
  nationalCurrency: NationalCurrencyReducer,
  cryptoCurrency: cryptoCurrencyReducer,
  calculate: CalculateReducer,
  mainCurrency: MainCurrencyReducer,
});

export default rootReducer;
