import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {}
};
const signUpSlice = createSlice({
  name: "signup",
  storage: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],

  initialState,
  reducers: {
    signUp: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);

      if (action.payload.email !== "") {
        if (action.payload.password !== action.payload.confirmPassword) {
          alert("password and confirm password do not match");
        } else {
          state.storage.push(state.value);
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      }
    }
  }
});

export const { signUp } = signUpSlice.actions;
export default signUpSlice.reducer;
