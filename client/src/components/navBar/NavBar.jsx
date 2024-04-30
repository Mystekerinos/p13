import React from "react";
import LogOut from "../loginOut/LoginOut";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/images/argentBankLogo.png";

const Navbar = ({ showLogout, displayName }) => {
  const isLoggedIn = localStorage.getItem("jwtToken") !== null;

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
        {showLogout && isLoggedIn ? (
          <>
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {displayName}
            </div>
            <LogOut />
          </>
        ) : (
          <Link
            className="main-nav-item"
            to={isLoggedIn ? "/profile" : "/login"}
          >
            <div>
              <i className="fa fa-user-circle"></i>
              {isLoggedIn ? displayName : "Sign In"}
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
