import React from "react";
import "../componentsStyles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <h2>Where in the world?</h2>
      <p>
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </p>
    </header>
  );
}
