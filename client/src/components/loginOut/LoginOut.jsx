import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOut = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");

    navigate("/login");
  };
  return (
    <div className="main-nav-item">
      <i className="fa fa-sign-out"></i>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginOut;
