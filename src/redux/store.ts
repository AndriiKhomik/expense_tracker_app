import { configureStore } from "@reduxjs/toolkit";
import { expenseApi } from "./features/expense/expenseSlice";

export const store = configureStore({
  reducer: {
    [expenseApi.reducerPath]: expenseApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([expenseApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
