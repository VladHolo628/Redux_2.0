import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = { isShown: false, productList: [], amount: 0 };

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
    toggleCart: state => {
      state.isShown = !state.isShown;
    },
    addToCart: (state, action) => {
      const existingProduct = state.productList.find(item => action.payload.title === item.title);
      if(!existingProduct) {
        state.productList.push(action.payload)
      } else {
        existingProduct.amount = existingProduct.amount + action.payload.amount
      }

     state.amount += action.payload.amount
    },
    increaseAmount: (state, action) => {
      const existingProductIndex = state.productList.findIndex(item => action.payload.title === item.title);
      state.productList[existingProductIndex].amount += 1

    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
