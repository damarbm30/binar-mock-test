import { createSlice } from "@reduxjs/toolkit";

const auth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null;

const initialState = {
  auth,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const key = action.payload.key;
      const value = JSON.stringify(action.payload.value);
      localStorage.setItem(key, value);
      window.location.reload();
    },
    userLogout: (state, action) => {
      const key = action.payload;
      localStorage.removeItem(key);
      window.location.reload();
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
