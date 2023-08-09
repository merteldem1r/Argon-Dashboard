import { createSlice } from "@reduxjs/toolkit";

type SideDrawer = {
  isSideDrawerOpen: boolean,
}

const initialState: SideDrawer = {
  isSideDrawerOpen: false,
}

const sideDrawerSlice = createSlice({
  name: 'sideDrawer',
  initialState,
  reducers: {
    openSideDrawer: (state) => {
      state.isSideDrawerOpen = true;
    },
    closeSideDrawer: (state) => {
      state.isSideDrawerOpen = false;
    },
  },
})

export const { openSideDrawer, closeSideDrawer } = sideDrawerSlice.actions;
export default sideDrawerSlice.reducer;