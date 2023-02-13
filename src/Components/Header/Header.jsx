import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.Module.css";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitter } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

const Header = ({ search, setSearch, setSearchValue }) => {
  const [category, setCategory] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(search);
  };
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <ImSearch />
              </button>
            </form>
          </div>
        </header>
      </div>
      <navbar id="navbar-section">
        <div className="container">
          <Link
            to="/"
            onClick={() => setCategory("Home")}
            className={category === "Home" ? "active-header" : "head-link"}
          >
            Home
          </Link>

          <Link
            to="/allnews"
            onClick={() => setCategory("Categories")}
            className={
              category === "Categories" ? "active-header" : "head-link"
            }
          >
            Categories
          </Link>
          <Link
            to="/politics"
            onClick={() => setCategory("Politics")}
            className={category === "Politics" ? "active-header" : "head-link"}
          >
            Politics
          </Link>
          <Link
            to="/business"
            onClick={() => setCategory("Business")}
            className={category === "Business" ? "active-header" : "head-link"}
          >
            Business
          </Link>
          <Link
            to="/health"
            onClick={() => setCategory("Health")}
            className={category === "Health" ? "active-header" : "head-link"}
          >
            Health
          </Link>
          <Link
            to="/technology"
            onClick={() => setCategory("Technology")}
            className={
              category === "Technology" ? "active-header" : "head-link"
            }
          >
            Technology
          </Link>
          <Link
            to="/sports"
            onClick={() => setCategory("Sports")}
            className={category === "Sports" ? "active-header" : "head-link"}
          >
            Sports
          </Link>
          <Link
            to="/science"
            onClick={() => setCategory("Science")}
            className={category === "Science" ? "active-header" : "head-link"}
          >
            Science
          </Link>
          <Link
            to="/contact"
            onClick={() => setCategory("Contact")}
            className={category === "Contact" ? "active-header" : "head-link"}
          >
            Contact
          </Link>
          <Link
            to="/about"
            onClick={() => setCategory("about")}
            className={category === "about" ? "active-header" : "head-link"}
          >
            About
          </Link>
        </div>
      </navbar>
    </>
  );
};

export default Header;
