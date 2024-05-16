// ProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchUserProfile,
  updateName,
  updateUserProfile,
} from "../../store/actions/userActions";
import Account from "../../components/account/Account";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/NavBar";
import EditName from "../../components/editName/EditName";

const ProfilePage = () => {
  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState("");
  console.log("displayName", displayName);

  useEffect(() => {
    console.log("profile", profile);
    if (
      profile &&
      profile.body &&
      profile.body.firstName &&
      profile.body.lastName
    ) {
      setDisplayName(`${profile.body.firstName} ${profile.body.lastName}`);
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
      // Dispatch de l'action updateName avec les nouveaux prénom et nom
      dispatch(updateName(firstName, lastName));
    }
  }, [dispatch, navigate, location.state, token]);
  console.log("displayName", displayName);
  const handleSaveName = (newName) => {
    const [newFirstName, newLastName] = newName.split(" ");
    // Dispatch de l'action updateUserProfile avec le nouveau nom
    dispatch(
      updateUserProfile({ firstName: newFirstName, lastName: newLastName })
    );
  };
  return (
    <>
      <Navbar showLogout={true} displayName={displayName} />
      {error && <p className="error-message">Erreur : {error}</p>}
      <div className="MainProfile">
        <div className="header">
          <h1>
            Welcome Back
            <br /> <div className="Name">{displayName}</div>
            <br />
          </h1>
          <EditName fullName={displayName} onSave={handleSaveName} />
        </div>
        <h2 className="sr-only">Comptes</h2>
        <Account />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
