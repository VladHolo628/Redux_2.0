import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = { productList: [], amount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productList.find(
        (item) => action.payload.title === item.title
      );
      if (!existingProduct) {
        state.productList.push(action.payload);
      } else {
        existingProduct.amount = existingProduct.amount + action.payload.amount;
      }

      state.amount += action.payload.amount;
    },
    increaseAmount: (state, action) => {
      const existingProductIndex = state.productList.findIndex(
        (item) => action.payload.title === item.title
      );
      state.productList[existingProductIndex].amount += 1;
      state.amount += 1;
    },
    decreaseAmount: (state, action) => {
      const existingProductIndex = state.productList.findIndex(
        (item) => action.payload.title === item.title
      );
      const isLastOne = state.productList[existingProductIndex].amount === 1;
      if (!isLastOne) {
        state.productList[existingProductIndex].amount -= 1;
        state.amount -= 1;
      } else {
        state.productList = state.productList.filter(
          (item) => item.title !== state.productList[existingProductIndex].title
        );
        state.amount -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
