import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/login`,
        {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      return data.body.token;
    } catch (error) {
      throw error;
    }
  }
);

const login = createSlice({
  name: "login",
  initialState: {
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message.split(":")[1];
      });
  },
});

export const { logout } = login.actions;
export default login.reducer;
