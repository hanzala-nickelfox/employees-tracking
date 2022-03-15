import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {}
};
const signUpSlice = createSlice({
  name: "signup",
  initialState,

  reducers: {
    signUp: (state, action) => {
      state.userData = action.payload;
    }
  }
});

export const { signUp } = signUpSlice.actions;
export default signUpSlice.reducer;
