// userActions.js
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
  async (token, thunkAPI) => {
    const profile = await getUserProfileApi(token);
    return { token, profile };
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, updatedProfile }) => {
    const profile = await updateUserProfileApi(token, updatedProfile);
    return { profile };
  }
);

export const updateName = (firstName, lastName) => {
  return {
    type: "user/updateName",
    payload: { firstName, lastName },
  };
};
