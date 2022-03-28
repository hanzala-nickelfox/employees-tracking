import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isloggedIn: false,
  isOpen: false
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
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    }
  }
});

export const { setUserData, setIsLoggedIn, setIsOpen } = userSlice.actions;
export default userSlice.reducer;
