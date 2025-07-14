import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High quality is our first priority.</p>
        <p style={{ fontSize: "0.95rem", color: "#888", marginTop: "10px" }}>
          &copy; {new Date().getFullYear()} Atharva Srivastava. All rights reserved.
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/atharva_srivastava">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://facebook.com/atharva_srivastava">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
