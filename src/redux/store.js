import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "redux/slices/signupSlice";
import loginReducer from "redux/slices/loginSlice";
const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer
  }
});
export default store;
