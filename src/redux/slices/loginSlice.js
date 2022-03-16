import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: {},
  isloggedIn: false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isloggedIn = action.payload;
    }
  }
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
