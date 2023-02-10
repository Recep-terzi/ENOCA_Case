import React from "react";
import "./Footer.Module.css";
import { FaPaperPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer id="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-title">Newsletter Subcribe</div>
              <div className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis aspernatur ut at quae omnis pariatur obcaecati
                possimus nisi ea iste!
              </div>
            </div>
            <div className="col-md-6 left">
              <input type="text" placeholder="Enter your email" />
              <button>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
