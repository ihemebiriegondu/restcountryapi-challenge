import React from "react";
import "../componentsStyles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header>
      <h2>Where in the world?</h2>
      <p>
        <FontAwesomeIcon icon={fasMoon} id="moonDark" />
        <FontAwesomeIcon icon={farMoon} id="moonLight" />
        <span id="darkMode">Dark Mode</span>
        <span id="lightMode">Light Mode</span>
      </p>
    </header>
  );
}
