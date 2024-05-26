import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
);

reportWebVitals();
