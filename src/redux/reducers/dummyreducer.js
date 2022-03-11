import { dummyAction } from "redux/actions/dummyAction";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  dummy: []
};

const dummyReducer = createReducer(initialState, (builder) => {
  builder.addCase(dummyAction, (state, action) => {
    state.dummy.push(action.payload);
  });
});

export default dummyReducer;
