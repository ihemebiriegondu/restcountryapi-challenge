import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export default function Filter() {
  return (
    <div id="filterDiv">
      <div id="filterBtn">
        <div>
          <p>Filter by Region</p>
          <FontAwesomeIcon icon={faChevronDown} id="downIcon" />
        </div>
      </div>

      <div id="filterOptions">
        <p className="filterOption">Africa</p>
        <p className="filterOption">Asia</p>
        <p className="filterOption">America</p>
      </div>
    </div>
  );
}
