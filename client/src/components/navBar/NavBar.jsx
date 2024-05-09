import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/images/argentBankLogo.png";
import { CircleUserRound } from "lucide-react";
import "../../assets/css/navBar.css";

const Navbar = ({ displayName }) => {
  const isLoggedIn = localStorage.getItem("jwtToken") !== null;

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
  };

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
        {isLoggedIn ? (
          <>
            <div className="main-nav-item">
              <CircleUserRound />
              <i className="fa fa-user-circle"></i>
              {displayName}
            </div>
            <Link className="main-nav-item" to="/login" onClick={handleLogout}>
              <div className="main-nav-link">Logout</div>
            </Link>
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
