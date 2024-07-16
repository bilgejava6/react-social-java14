import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./feature";

const store = configureStore({
  reducer:{
    auth: authSlice
  }
});
export type SocialDispatch = typeof store.dispatch;
export default store;