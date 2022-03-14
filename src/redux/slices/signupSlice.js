import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  storage: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : []
};
const signUpSlice = createSlice({
  name: "signup",
  initialState,

  reducers: {
    signUp: (state, action) => {
      state.userData = action.payload;

      if (action.payload.email !== "") {
        if (action.payload.password !== action.payload.confirmPassword) {
          alert("password and confirm password do not match");
        } else {
          state.storage.push(state.userData);
          localStorage.setItem("user", JSON.stringify(state.storage));
        }
      }
    }
  }
});

export const { signUp } = signUpSlice.actions;
export default signUpSlice.reducer;
