import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.Module.css";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitter } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

const Header = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      document.getElementById("navbar-section").style.position = "fixed";
      document.getElementById("navbar-section").style.top = "0";
      document.getElementById("navbar-section").style.marginTop = "0";
      document.getElementById("navbar-section").style.padding = "30px 0";
    } else {
      document.getElementById("navbar-section").style.marginTop = "40px";
      document.getElementById("navbar-section").style.position = "relative";
    }
  };
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
          <ImSearch />
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
