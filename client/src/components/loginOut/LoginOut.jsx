import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/reducer/userReducer";
import { useNavigate } from "react-router-dom";

const LoginOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <div className="main-nav-item" onClick={handleLogout}>
      <i className="fa fa-sign-out"></i>
      Sign Out
    </div>
  );
};

export default LoginOut;
