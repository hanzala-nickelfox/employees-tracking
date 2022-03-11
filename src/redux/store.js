import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "redux/reducers/dummyreducer";
import dummyReducer2 from "redux/slices/dummySlice";
const store = configureStore({
  reducer: {
    //dummy is imported from the reducer folder
    dummy: dummyReducer,
    //dummy2 is imported from the slices folder
    dummy2: dummyReducer2
  }
});
export default store;
