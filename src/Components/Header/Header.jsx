import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.Module.css";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitter } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

const Header = () => {
  const [active, setActive] = useState();
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
    } else {
      document.getElementById("navbar-section").style.position = "relative";
    }
  };
  console.log(active);
  return (
    <>
      <div className="container">
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
      </div>
      <navbar id="navbar-section">
        <div className="container">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={active === "Home" ? "active-header" : "head-link"}
          >
            Home
          </Link>
          <Link
            to="/entertainment"
            onClick={() => setActive("Entertainment")}
            className={
              active === "Entertainment" ? "active-header" : "head-link"
            }
          >
            Entertainment
          </Link>
          <Link
            to="/politics"
            onClick={() => setActive("Politics")}
            className={active === "Politics" ? "active-header" : "head-link"}
          >
            Politics
          </Link>
          <Link
            to="/business"
            onClick={() => setActive("Business")}
            className={active === "Business" ? "active-header" : "head-link"}
          >
            Business
          </Link>
          <Link
            to="/health"
            onClick={() => setActive("Health")}
            className={active === "Health" ? "active-header" : "head-link"}
          >
            Health
          </Link>
          <Link
            to="/technology"
            onClick={() => setActive("Technology")}
            className={active === "Technology" ? "active-header" : "head-link"}
          >
            Technology
          </Link>
          <Link
            to="/sports"
            onClick={() => setActive("Sports")}
            className={active === "Sports" ? "active-header" : "head-link"}
          >
            Sports
          </Link>
          <Link
            to="/science"
            onClick={() => setActive("Science")}
            className={active === "Science" ? "active-header" : "head-link"}
          >
            Science
          </Link>
          <Link
            to="/contact"
            onClick={() => setActive("Contact")}
            className={active === "Contact" ? "active-header" : "head-link"}
          >
            Contact
          </Link>
        </div>
      </navbar>
    </>
  );
};

export default Header;
