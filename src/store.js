import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import swapiReducer from "./swapiSlice";
import swapiSaga from "./swapiSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(swapiSaga);
