import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isloggedIn: false,
  isOpen: false,
  isChecking: false,
  isUser: false
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
    },
    setIsChecking: (state, action) => {
      state.isChecking = action.payload;
    },
    setIsUser: (state, action) => {
      state.isUser = action.payload;
    }
  }
});

export const {
  setUserData,
  setIsLoggedIn,
  setIsOpen,
  setIsChecking,
  setIsUser
} = userSlice.actions;
export default userSlice.reducer;
