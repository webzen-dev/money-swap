export interface NationalCurrencyFunctionInterface {
  getNationalCurrencyData(): Promise<NationalCurrencyType>;
}

export interface NationalCurrencyType {
  [currencyCode: string]: number;
}
