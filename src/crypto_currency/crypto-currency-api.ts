import axios from "axios";
import {
  CryptoCurrencyFunctionInterface,
  CryptoCurrencyItemType,
} from "./crypto-currency-definitions.ts";
import { CRYPTO_CURRENCY_API } from "../api/api-endpoints-v1.ts";

class CryptoCurrencyApi implements CryptoCurrencyFunctionInterface {
  async getCryptoCurrencyApi(): Promise<CryptoCurrencyItemType[]> {
    try {
      const response = await axios.get(CRYPTO_CURRENCY_API, {
        headers: {
          // For testing, I had to put the api-key in this section. (-_-);
          "X-CMC_PRO_API_KEY":
            process.env.API_KEY || "69e4a3ea-0031-4caf-8fb8-f4fa9b607f61",
          Accept: "application/json",
        },
      });

      if (response && response.data && Array.isArray(response.data.data)) {
        console.log("Response Data:", response.data.data);
        return response.data.data as CryptoCurrencyItemType[];
      } else {
        throw new Error("Invalid data format: Expected an array");
      }
    } catch (err: any) {
      console.error(
        "API Error:",
        err.response ? err.response.data : err.message
      );
      throw err;
    }
  }
}

export default CryptoCurrencyApi;
