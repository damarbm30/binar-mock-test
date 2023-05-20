import { createSlice } from "@reduxjs/toolkit";

const auth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null;

const initialState = {
  auth,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
