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
    // Utilisez getState pour obtenir le token depuis l'état global
    const token = getState().user.token;
    const profile = await getUserProfileApi(token);
    return { token, profile };
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (updatedProfile, { getState }) => {
    // Utilisez getState pour obtenir le token depuis l'état global
    const token = getState().user.token;
    const profile = await updateUserProfileApi(token, updatedProfile);
    return { profile };
  }
);
