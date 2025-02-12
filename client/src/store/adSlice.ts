import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { Ad } from '../types'; // Определите типы позже

interface AdState {
  ads: Ad[];
  currentAd: Ad | null;
}

const initialState: AdState = {
  ads: [],
  currentAd: null,
};

const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    setAds: (state, action: PayloadAction<Ad[]>) => {
      state.ads = action.payload;
    },
    setCurrentAd: (state, action: PayloadAction<Ad | null>) => {
      state.currentAd = action.payload;
    },
  },
});

export const { setAds, setCurrentAd } = adSlice.actions;
export default adSlice.reducer;
