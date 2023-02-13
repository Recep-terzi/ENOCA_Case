import React from "react";
import Header from "../Header/Header";
import "./Contact.Module.css";
const Contact = () => {
  return (
    <>
      <Header />
      <div id="contact-section">
        <div className="container">
          <div className="contact-title">Contact Us</div>
          <form className="contact-form">
            <div className="first-last-name">
              <div className="first-name">
                <span>First Name</span>
                <input type="text" />
              </div>
              <div className="last-name">
                <span>Last Name</span>
                <input type="text" />
              </div>
            </div>
            <div className="email-tel">
              <div className="email">
                <span>Email Address</span>
                <input type="text" />
              </div>
              <div className="tel-number">
                <span>Tel. Number</span>
                <input type="text" />
              </div>
            </div>
            <div className="message">
              <span>Message</span>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
