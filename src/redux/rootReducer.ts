import { combineReducers } from "redux";
import NationalCurrencyReducer from "../national_currency/NationalCurrencySlice.ts";

const rootReducer = combineReducers({
  nationalCurrency: NationalCurrencyReducer,
});

export default rootReducer;
