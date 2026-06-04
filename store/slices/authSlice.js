import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services/api";

const initialState = {
  user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("aman_user") || "null") : null,
  token: typeof window !== "undefined" ? localStorage.getItem("aman_token") : null,
  status: "idle",
  error: null
};

export const login = createAsyncThunk("auth/login", async (payload) => {
  const { data } = await api.post("/auth/login", payload);
  return data;
});

export const register = createAsyncThunk("auth/register", async (payload) => {
  const { data } = await api.post("/auth/register", payload);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("aman_token");
      localStorage.removeItem("aman_user");
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher((action) => action.type.startsWith("auth/") && action.type.endsWith("/pending"), (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addMatcher((action) => action.type.startsWith("auth/") && action.type.endsWith("/fulfilled"), (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("aman_token", action.payload.token);
        localStorage.setItem("aman_user", JSON.stringify(action.payload.user));
      })
      .addMatcher((action) => action.type.startsWith("auth/") && action.type.endsWith("/rejected"), (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
