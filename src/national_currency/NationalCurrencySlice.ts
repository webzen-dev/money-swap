import NationalCurrencyAPI from "./national-currency-api.ts";
import { NationalCurrencyType } from "./national-currency-definitions.ts";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getNationalCurrencyData = createAsyncThunk(
  "nationalCurrency/fetchData",
  async (): Promise<NationalCurrencyType> => {
    const api = new NationalCurrencyAPI();
    const data = await api.getNationalCurrencyData();
    return data;
  }
);
// initialState Type:
interface initialStateType {
  data: NationalCurrencyType;
  loading: boolean;
  error: string | null;
}
const NationalCurrencySlice = createSlice({
  name: "nationalCurrency",
  initialState: {
    data: {},
    loading: false,
    error: null,
  } as initialStateType,
  reducers: {
    getNationalCurrency: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNationalCurrencyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNationalCurrencyData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getNationalCurrencyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Can't fetch Data (-_-) ; ";
      });
  },
});
export default NationalCurrencySlice.reducer;
export const  getNationalCurrency  = NationalCurrencySlice.actions;
