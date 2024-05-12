import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as loginUserApi,
  getUserProfile as getUserProfileApi,
  updateUserProfile as updateUserProfileApi,
} from "../../api/ApiService";

/**
 * Action asynchrone pour authentifier un utilisateur.
 * Utilise la méthode `loginUser`pour envoyer une requête d'authentification.
 * Si la requête réussit, retourne le token d'authentification.
 */
export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async ({ email, password }) => {
    const token = await loginUserApi(email, password);
    return token;
  }
);

/**
 * Action asynchrone pour récupérer le profil d'un utilisateur.
 * Utilise le token stocké dans l'état de Redux pour envoyer une requête pour les données de profil de l'utilisateur.
 * Si la requête réussit, retourne les données du profil de l'utilisateur associé à ce token
 */
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState }) => {
    const { token } = getState().user; // Obtenez le token de l'état de Redux
    const userProfile = await getUserProfileApi(token);
    return userProfile;
  }
);

/**
 * Action asynchrone pour mettre à jour le profil d'un utilisateur.
 * Utilise la méthode `updateUserProfile`pour envoyer une requête de mise à jour du profil de l'utilisateur.
 * Si la requête réussit, retourne les données du profil mis à jour de l'utilisateur
 * En cas d'erreur, rejette la promesse avec le message d'erreur.
 */
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ updatedProfile }, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().user; // Obtenez le token de l'état de Redux
      const data = await updateUserProfileApi(token, updatedProfile);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
