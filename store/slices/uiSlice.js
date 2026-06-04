import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: typeof window !== "undefined" ? localStorage.getItem("aman_theme") === "dark" : false,
  sidebarOpen: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("aman_theme", state.darkMode ? "dark" : "light");
    },
    setSidebarOpen(state, action) {
      state.sidebarOpen = action.payload;
    }
  }
});

export const { toggleDarkMode, setSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;
