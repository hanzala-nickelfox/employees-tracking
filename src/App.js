import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./router";

import store, { persistor } from "redux/store";
import "./styles/global.scss";

/**
 * @description Check if browser is Safar
 * @description It'll be usefull for web notifications
 */

if (window.safari) {
  console.log("safari browser detected");
} else {
  // initializeFirebase();
}

function App() {


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <AppRouter />

      </PersistGate>
    </Provider>
  );
}

export default App;
