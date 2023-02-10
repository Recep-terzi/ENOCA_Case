import React from "react";
import { Link } from "react-router-dom";
import "./Header.Module.css";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitter } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header id="header-section">
        <div className="header-logo">
          <Link to="/"> Recep Terzi </Link>
        </div>
        <div className="header-menu">
          <FaFacebookF />
          <BsTwitter />
          <SlSocialInstagram />
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
      </header>
      <navbar id="navbar-section">
        <Link to="/">Home</Link>
        <Link to="/">Categories</Link>
        <Link to="/">Politics</Link>
        <Link to="/">Business</Link>
        <Link to="/">Health</Link>
        <Link to="/">Design</Link>
        <Link to="/">Sport</Link>
        <Link to="/">Contact</Link>
      </navbar>
    </>
  );
};

export default Header;
