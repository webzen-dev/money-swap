import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CryptoCurrencyItemType } from "./crypto-currency-definitions.ts";
import CryptoCurrencyApi from "./crypto-currency-api.ts";

const getCryptoCurrencyData = createAsyncThunk(
  "CryptoCurrency/fetchData",
  async (start: number): Promise<CryptoCurrencyItemType[]> => {
    const api = new CryptoCurrencyApi();
    const data = await api.getCryptoCurrencyApi(start);
    return data;
  }
);

interface initialStateType {
  data: CryptoCurrencyItemType[];
  loading: boolean;
  error: string | null;
  start: number;
}

const CryptoCurrencySlice = createSlice({
  name: "cryptoCurrency",
  initialState: {
    data: [],
    loading: false,
    error: null,
    start: 1,
  } as initialStateType,
  reducers: {
    getCryptoCurrency: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCryptoCurrencyData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCryptoCurrencyData.fulfilled, (state, action) => {
      state.loading = false;
      const newData = action.payload.filter(
        (item) =>
          !state.data.some((existingItem) => existingItem.id === item.id)
      );
      state.data = [...state.data, ...newData];
      state.start += 25;
    });

    builder.addCase(getCryptoCurrencyData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Can't fetch Data (-_-) ; ";
    });
  },
});
export { getCryptoCurrencyData };
export default CryptoCurrencySlice.reducer;
