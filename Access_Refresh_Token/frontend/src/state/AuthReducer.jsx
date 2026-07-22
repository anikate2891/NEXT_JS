import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isloading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isloading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isloading = false;
    }
  }
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;