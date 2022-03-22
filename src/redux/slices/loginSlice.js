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
      console.log(state.userData);
    },
    setIsLoggedIn: (state, action) => {
      state.isloggedIn = action.payload;
      console.log(state.isloggedIn);
    }
  }
});

export const { login, setIsLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
