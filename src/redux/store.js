import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "redux/slices/signupSlice";
const store = configureStore({
  reducer: {
    signup: signupReducer
  }
});
export default store;
