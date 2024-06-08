import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../../store/actions/userActions";
import { updateName } from "../../store/reducers/authReducer";
import Account from "../../components/account/Account";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/NavBar";
import EditName from "../../components/editName/EditName";
import "../../assets/css/profilePage.css";

const ProfilePage = () => {
  const [initialFirstName, setInitialFirstName] = useState("");
  const [initialLastName, setInitialLastName] = useState("");

  const profile = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, navigate, token]);

  useEffect(() => {
    if (profile) {
      setInitialFirstName(profile.body?.firstName || profile?.firstName || "");
      setInitialLastName(profile.body?.lastName || profile?.lastName || "");
    }
  }, [profile]);

  const handleSaveName = (firstName, lastName) => {
    dispatch(updateUserProfile({ firstName, lastName })).then(() => {
      dispatch(updateName({ firstName, lastName }));
    });
  };

  if (profile) {
    const displayName = `${profile.body?.firstName || profile?.firstName} ${
      profile.body?.lastName || profile?.lastName
    }`;
    return (
      <>
        <Navbar showLogout={true} displayName={displayName} />
        {error && <p className="error-message">Erreur : {error}</p>}
        <div className="MainProfile">
          <h1 className="Welcome-back">
            Welcome Back
            <br />
            <div className="Name">
              {(profile.body?.firstName || profile?.firstName) +
                " " +
                (profile.body?.lastName || profile?.lastName)}
            </div>
            <br />
            <EditName
              firstName={initialFirstName}
              lastName={initialLastName}
              onSave={handleSaveName}
            />
          </h1>
          <h2 className="sr-only">Comptes</h2>
          <Account displayName={displayName} />
        </div>
        <Footer />
      </>
    );
  }

  return null;
};

export default ProfilePage;
