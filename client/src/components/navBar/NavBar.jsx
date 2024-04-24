import React from "react";
import Logo from "../../assets/images/argentBankLogo.png";
import Links from "./link/Link";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="Argent Bank - logo" />
      </Link>
      <ul>
        <Links />
      </ul>
    </nav>
  );
};

export default Navbar;
