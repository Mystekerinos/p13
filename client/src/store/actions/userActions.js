import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserApi,
  getUserProfile as getUserProfileApi,
  updateUserProfile as updateUserProfileApi,
} from "../../api/ApiService";

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async ({ email, password }) => {
    const token = await loginUserApi(email, password);
    return { token };
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState }) => {
    const token = getState().user.token;
    const profile = await getUserProfileApi(token);
    return { token, profile };
  }
);

export const updateUserProfile = createAsyncThunk(
  async (updatedProfile, { getState }) => {
    const token = getState().user.token;
    const profile = await updateUserProfileApi(token, updatedProfile);
    return { profile };
  }
);
