export interface CryptoCurrencyFunctionInterface {
  getCryptoCurrencyApi(start:number): Promise<CryptoCurrencyItemType[]>; 
}

export interface CryptoCurrencyItemType {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  total_supply: number;
  date_added: string;
  quote: {
    USD: {
      price: number;
      market_cap: number;
      last_updated: string;
    };
  };
}
