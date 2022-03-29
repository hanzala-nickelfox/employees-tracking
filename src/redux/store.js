import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/slice";
import projectReducer from "redux/project/slice";
import rootSaga from "./rootSagas";
const sagaMiddleWare = createSagaMiddleware();
function middleware(getDefaultMiddleware) {
  return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare);
}
const store = configureStore({
  reducer: {
    userReducer,
    projectReducer
  },
  middleware
});

sagaMiddleWare.run(rootSaga);
export default store;
