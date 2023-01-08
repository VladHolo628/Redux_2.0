import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import uiReducer from "./ui-slice";

const rootReducer = combineReducers({ cart: cartReducer, ui: uiReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
