import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
