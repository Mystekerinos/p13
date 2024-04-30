import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Account from "../../components/Account/Account";
import EditableName from "../../components/EditableName/EditableName";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/NavBar";

import {
  fetchUserProfile,
  updateUserProfile,
} from "../../store/actions/userActions";

import accountData from "../../data/accounData";

import "./UserDashboard.css";

/**
 * Affiche les informations de profil d'un utilisateur connecté
 * Met à jour le nom de l'utilisateur et d'afficher ses comptes
 *
 * Displays the profile information of a logged-in user.
 * Update the user's name and displaying their accounts.
 * @component
 * @returns {React.Element} - Le rendu du composant UserDashboard.  The render of the UserDashboard component.
 */

const UserDashboard = () => {
  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");

  // Met à jour le nom d'affichage lorsque le profil est chargé
  useEffect(() => {
    if (profile) {
      setDisplayName(profile.fullName);
    }
  }, [profile]);

  /**
   * Met à jour le nom de l'utilisateur dans le profil.
   * @param {*} newName - Le nouveau nom complet de l'utilisateur.
   */
  const handleNameUpdate = async (newName) => {
    const jwtToken = localStorage.getItem("jwtToken");
    const updatedProfile = {
      firstName: newName.split(" ")[0],
      lastName: newName.split(" ")[1],
    };

    // Appeler l'action "updateUserProfile" pour mettre à jour le profil de l'utilisateur
    // avec les nouvelles informations (updatedProfile), en utilisant le token JWT
    dispatch(updateUserProfile({ token: jwtToken, updatedProfile }));

    setDisplayName(newName);
  };

  useEffect(() => {
    // Récupérer le token JWT depuis le localStorage
    const jwtToken = localStorage.getItem("jwtToken");
    // Vérifier si le token JWT existe
    if (!jwtToken) {
      // Si l'utilisateur n'est pas connecté (pas de token JWT trouvé), rediriger vers la page de connexion
      navigate("/login");
    } else {
      // Si un token JWT est présent (l'utilisateur est connecté),
      // Récupérer le profil de l'utilisateur depuis l'API backend
      dispatch(fetchUserProfile(jwtToken));
    }
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar showLogout={true} displayName={displayName} />
      {error && <p className="error-message">Error: {error}</p>}
      <main className="main-profile">
        <div className="header">
          <h1 className="profile-title">
            Welcome back <br /> <span className="name">{displayName}</span>
            <br />
            {profile && (
              <EditableName
                fullName={profile.fullName}
                onSave={handleNameUpdate}
              />
            )}
          </h1>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accountData.map((account) => (
          <Account
            // concatène le titre et le numéro de compte, pour obtenir une clé unique pour chaque élément, même si les numéros de compte sont identiques
            key={`${account.title}-${account.accountNumber}`}
            title={account.title}
            accountNumber={account.accountNumber}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default UserDashboard;
