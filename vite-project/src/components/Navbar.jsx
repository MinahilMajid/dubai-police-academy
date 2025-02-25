import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import myimage from "../assets/my-image.webp";
import myimage2 from "../assets/my-image2.jpeg";

import "./Navbar.css"; // Import the CSS file
import LanguageSelector from "./LanguageSelector";
const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => navigate("/")}>
        <img className="logo1" src={myimage} alt="Logo" />
        <img className="logo2" src={myimage2} alt="Logo" />
      </div>

      <h1 className="title">{t("navbar.title")}</h1>

      <ul className="nav-links">
        <NavLink to="/" className="nav-item">
          HOME
        </NavLink>
        <li className="nav-item browse">{t("navbar.browse")}</li>
        <li>
          <LanguageSelector />
        </li>
        <li className="nav-item signin" onClick={() => navigate("/Signup")}>
          {t("navbar.signIn")}
        </li>
        <li className="nav-item icons">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="6.5"
              stroke="#000"
              strokeLinejoin="round"
            />
            <path
              d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
              fill="#000"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
