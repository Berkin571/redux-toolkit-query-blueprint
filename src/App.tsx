import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { Data } from "./components";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./features/data/apiSlice";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Data />
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
