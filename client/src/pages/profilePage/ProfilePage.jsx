import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../../store/actions/userActions";
import Account from "../../components/account/Account";
import EditName from "../../components/editName/EditName";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/NavBar";

const ProfilePage = () => {
  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.fullName);
    }
  }, [profile]);

  const handleNameUpdate = async (newName) => {
    try {
      const updatedProfile = {
        firstName: newName.split(" ")[0],
        lastName: newName.split(" ")[1],
      };
      dispatch(updateUserProfile({ token: token, updatedProfile }));
      setDisplayName(newName);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du nom :", error);
    }
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      navigate("/login");
    } else {
      dispatch(fetchUserProfile(jwtToken));
    }
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar showLogout={true} displayName={displayName} />
      {error && <p className="error-message">Erreur : {error}</p>}
      <div className="MainProfile">
        <div className="header">
          <h1 className="profile-title">
            Bienvenue
            <br /> <div className="Name">{displayName}</div>
            <br />
            {profile && (
              <EditName fullName={profile.fullName} onSave={handleNameUpdate} />
            )}
          </h1>
        </div>
        <h2 className="sr-only">Comptes</h2>
        <Account />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
