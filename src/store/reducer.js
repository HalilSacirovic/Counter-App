import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { quoteSlice } from "./counterSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  counter: quoteSlice.reducer,
  // test: testSlice.reducer,
});
