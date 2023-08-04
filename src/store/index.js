import { configureStore, combineReducers } from "@reduxjs/toolkit";
import compareReducer from "./compareSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  compareReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["compare"],
  debug: true,
};

const myPersistReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: myPersistReducer,
});

export const persistor = persistStore(store);
