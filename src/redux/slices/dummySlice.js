import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dummy: []
};

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    dummyAction: (state, action) => {
      state.dummy.push(action.payload);
    }
  }
});

export const { dummyAction } = dummySlice.actions;
export default dummySlice.reducer;
