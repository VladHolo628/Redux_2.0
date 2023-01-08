import { createSlice } from "@reduxjs/toolkit";
const defaultUiState = { isShown: false, notification: null };

const uiSlice = createSlice({
  name: "UI",
  initialState: defaultUiState,
  reducers: {
    toggleCart: (state) => {
      state.isShown = !state.isShown;
    },
    setNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
