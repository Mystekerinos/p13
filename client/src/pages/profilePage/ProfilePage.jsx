// ProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUserProfile, updateName } from "../../store/actions/userActions";
import Account from "../../components/account/Account";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/NavBar";

const ProfilePage = () => {
  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (profile) {
      setDisplayName(`${profile.firstName} ${profile.lastName}`);
    }
  }, [profile]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchUserProfile(token));
    }

    if (location.state) {
      const { firstName, lastName } = location.state;
      dispatch(updateName(firstName, lastName));
    }
  }, [dispatch, navigate, location.state, token]);

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
