import React from "react";
import { Link, useNavigate } from "react-router-dom";
import argentBankLogo from "../../assets/images/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { CircleUserRound, LogOut } from "lucide-react";
import { logoutUser } from "../../store/reducers/authReducer";
import "../../assets/css/navBar.css";

const Navbar = ({ displayName }) => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLogout = () => {
    dispatch(logoutUser());
    // Redirection vers la page de login après la déconnexion
    navigate("/login");
  };
  console.log("displayName", displayName);
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="nav-item">
        {token !== null ? (
          <>
            <div className="main-nav-item">
              <CircleUserRound />
              <i className="fa fa-user-circle"></i>
              {displayName}
            </div>

            <div className="main-nav-item" onClick={handleLogout}>
              <LogOut />
              <div className="main-nav-link">Sign out</div>
            </div>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <div className="main-nav-link">
              <CircleUserRound />
              <i className="fa fa-user-circle"></i>
              Sign In
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
