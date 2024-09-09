import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export default function Searchbar() {
  return (
    <div id="searchDiv">
      <p><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
      <input type="text" placeholder="Search for a country..."></input>
    </div>
  );
}
