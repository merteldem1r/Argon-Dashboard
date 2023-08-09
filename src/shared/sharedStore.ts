import { configureStore } from "@reduxjs/toolkit";
import sideDrawerReducer from "./../shared/features/sideDrawerSlice.ts";

export const sharedStore = configureStore({
  reducer: {
    sideDrawer: sideDrawerReducer,
  },
})

export type RootState = ReturnType<typeof sharedStore.getState>
export type AppDispatch = typeof sharedStore.dispatch;