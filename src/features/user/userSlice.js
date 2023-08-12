import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

// Generate pending, fulfilled or rejected action types
const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/users");
  return response.data;
}); 

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = []; 
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
export { fetchUsers };