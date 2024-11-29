import React from "react";
import { Provider } from "react-redux";
import weatherStore from "./store/weatherStore";
import Main from "./pages/Main";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./router.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={weatherStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
