import React from "react";
import Logo from "../../assets/logo.png";
import Style from "./style.module.scss";
import Mode from "../Mode";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/use-auth";

const Header = () => {
  const { mode, isAdmin } = useAuth();

  return (
    <div className={Style.container + " " + mode}>
      <div className={Style.navbar}>
        <div className={Style.content}>
          <img className={Style.logo} src={Logo} alt="logo" />
          <h3>Book-Store</h3>
        </div>
        <div className={Style.switch}>
          {isAdmin && <Link to="/admin">Admin</Link>}
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sing-Up</Link>
          <Link to="/aboutus">About Us</Link>
          <Mode />
        </div>
      </div>
    </div>
  );
};

export default Header;
