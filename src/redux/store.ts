import { configureStore, Action, ThunkDispatch } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devicesReducer } from "./api/slice";
import { userReducer } from "./reducers/user-reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  devices: devicesReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = ThunkDispatch<any, unknown, Action>;
