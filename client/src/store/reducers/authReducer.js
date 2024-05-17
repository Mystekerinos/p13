import { createSlice } from "@reduxjs/toolkit";
import {
  authenticateUser,
  fetchUserProfile,
  updateUserProfile,
} from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    error: null,
    token: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.profile = {};
      state.token = null;
    },
    updateName: (state, action) => {
      const { firstName, lastName } = action.payload;
      if (state.profile) {
        state.profile.firstName = firstName;
        state.profile.lastName = lastName;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.profile = action.payload.profile;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.token = action.payload.token.token;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.profile.firstName = action.payload.profile.firstName;
        state.profile.lastName = action.payload.profile.lastName;
        state.error = null; // Réinitialiser l'erreur
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload
          ? action.payload
          : "Erreur lors de la mise à jour du profil utilisateur.";
      });
  },
});

export const { logoutUser, updateName } = userSlice.actions;

export default userSlice.reducer;
