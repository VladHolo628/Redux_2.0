import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = { isShown: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    showCart: (state) => {
      state.isShown = true;
    },
    hideCart: (state) => {
      state.isShown = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
