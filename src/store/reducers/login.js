import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterPost } from "./authServices";
const initialState = {
  user: null,
  loading: false,
  error: false,
  success: false,
  isLogIn: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      // https://eco-api-one.vercel.app/api/user/login
      return await RegisterPost(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
const LogInReducer = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsLogIn: (state, action) => {
      state.isLogIn = !state.isLogIn;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogIn = true;
        state.success = true;
        state.message = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = false;
        state.message = action.payload;
      });
  },
});
export const { isLogIn } = LogInReducer.actions;
export default LogInReducer.reducer;
