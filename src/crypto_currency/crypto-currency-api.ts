import axios from "axios";
import {
  CryptoCurrencyFunctionInterface,
  CryptoCurrencyItemType,
} from "./crypto-currency-definitions.ts";
import { CRYPTO_CURRENCY_API } from "../api/api-endpoints-v1.ts";

class CryptoCurrencyApi implements CryptoCurrencyFunctionInterface {
  async getCryptoCurrencyApi(start): Promise<CryptoCurrencyItemType[]> {
    try {
      const response = await axios.get(`${CRYPTO_CURRENCY_API}?start=${start}&limit=25`, {
        headers: {
          // For testing, I had to put the api-key in this section. (-_-);
          "X-CMC_PRO_API_KEY":
            process.env.API_KEY || "69e4a3ea-0031-4caf-8fb8-f4fa9b607f61",
          Accept: "application/json",
        },
      });

      if (response && response.data && Array.isArray(response.data.data)) {
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
