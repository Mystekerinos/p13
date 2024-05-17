import React, { useEffect } from "react";
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

const ProfilePage = () => {
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

  const handleSaveName = (firstName, lastName) => {
    // Dispatch the updateUserProfile action
    dispatch(updateUserProfile({ firstName, lastName })).then(() => {
      // Update the store only after the backend update is successful
      dispatch(updateName({ firstName, lastName }));
    });
  };
  if (profile) {
    return (
      <>
        <Navbar
          showLogout={true}
          displayName={
            (profile.body?.firstName || profile?.lastName) +
            " " +
            (profile.body?.lastName || profile?.lastName)
          }
        />
        {error && <p className="error-message">Erreur : {error}</p>}
        <div className="MainProfile">
          <div className="header">
            <h1>
              Welcome Back
              <br />
              <div className="Name">
                {(profile.body?.firstName || profile?.lastName) +
                  " " +
                  (profile.body?.lastName || profile?.lastName)}
              </div>
              <br />
            </h1>
            <EditName
              fullName={profile.body?.firstName + " " + profile.body?.lastName}
              onSave={handleSaveName}
            />
          </div>
          <h2 className="sr-only">Comptes</h2>
          <Account />
        </div>
        <Footer />
      </>
    );
  }

  return null;
};

export default ProfilePage;
