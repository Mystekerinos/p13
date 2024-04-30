import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserApi,
  getUserProfile as getUserProfileApi,
  updateUserProfile as updateUserProfileApi,
} from "../../api/ApiService";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const token = await loginUserApi(email, password);
    return token;
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    const userProfile = await getUserProfileApi(token);
    return userProfile;
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, updatedProfile }, { rejectWithValue }) => {
    try {
      const data = await updateUserProfileApi(token, updatedProfile);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
