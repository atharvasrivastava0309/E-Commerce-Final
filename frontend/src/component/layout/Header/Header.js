import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#eb4034", // Always red
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.5vmax", // Larger font for polish
  link2Size: "1.5vmax",
  link3Size: "1.5vmax",
  link4Size: "1.5vmax",
  link1Color: "rgba(35, 35, 35,0.9)",
  link2Color: "rgba(35, 35, 35,0.9)",
  link3Color: "rgba(35, 35, 35,0.9)",
  link4Color: "rgba(35, 35, 35,0.9)",
  nav1justifyContent: "center",
  nav2justifyContent: "center",
  nav3justifyContent: "center",
  nav4justifyContent: "center",
  link1Margin: "0",
  link2Margin: "0",
  link3Margin: "0",
  link4Margin: "0",
  link1Padding: "1.5vmax 3vmax",
  link2Padding: "1.5vmax 3vmax",
  link3Padding: "1.5vmax 3vmax",
  link4Padding: "1.5vmax 3vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return (
    <div style={{ position: "relative" }}>
      <ReactNavbar {...options} />
      <div className="navbar-tagline" style={{
        position: "absolute",
        left: "50%",
        top: "60px",
        transform: "translateX(-50%)",
        fontSize: "1.1rem",
        color: "#555",
        fontWeight: 400,
        letterSpacing: "0.5px"
      }}>
        Your Trusted Online Store
      </div>
    </div>
  );
};

export default Header;
