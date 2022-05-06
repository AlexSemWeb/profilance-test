import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  userReducer,
  newsReducer,
});

export const store = configureStore({ reducer: rootReducer });
