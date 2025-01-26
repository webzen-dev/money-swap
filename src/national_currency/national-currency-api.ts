import axios from "axios";
import { NATIONAL_CURRENCY_API } from "../api/api-endpoints-v1.ts";
import {
  NationalCurrencyFunctionInterface,
  NationalCurrencyType,
} from "./national-currency-definitions.ts";

class NationalCurrencyAPI implements NationalCurrencyFunctionInterface {
  async getNationalCurrencyData(): Promise<NationalCurrencyType> {
    try {
      const response = await axios.get(NATIONAL_CURRENCY_API);
      const data = response.data;

      if (data?.conversion_rates && typeof data.conversion_rates === "object") {
        return data.conversion_rates as NationalCurrencyType;
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      console.error("Error Getting National Currency data: ", err);
      return {};
    }
  }
}

export default NationalCurrencyAPI;
