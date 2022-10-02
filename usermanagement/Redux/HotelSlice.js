import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {FetchAllHotels} from '../APIs/Index'
const initialState = {
  loading: false,
  hotels: [],
  filterHotels :[],
  error: "",
};

export const FetchHotels = createAsyncThunk("hotels/FetchHotels", async () => {
    const res = await FetchAllHotels()
  return res.data
});

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers:{
    filterHotel:(state,action)=>{
        state.filterHotels = action.payload.map(v=>{
         return  state.hotels.filter(hotel=>v ==hotel.category )
         })
    }
},
  extraReducers: (builder) => {
    builder.addCase(FetchHotels.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchHotels.fulfilled, (state, action) => {
      state.loading = false;
      state.hotels = action.payload;
      state.error = "";
    });
    builder.addCase(FetchHotels.rejected, (state, action) => {
      state.loading = false;
      state.hotels = [];
      state.error = action.payload;
    });
  },
});

export default hotelSlice.reducer;
export const {filterHotel} = hotelSlice.actions