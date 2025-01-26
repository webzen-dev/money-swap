export interface CryptoCurrencyFunctionInterface {
  getCryptoCurrencyApi(): Promise<CryptoCurrencyItemType[]>; // Return an array
}

export interface CryptoCurrencyItemType {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  total_supply: number;
  date_added: string;
  quote: {
    usd: {
      price: number;
      market_cap: number;
      last_updated: string;
    };
  };
}
