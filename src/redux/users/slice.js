import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isloggedIn: false
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isloggedIn = action.payload;
    }
  }
});

export const { setUserData, setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
