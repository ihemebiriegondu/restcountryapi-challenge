import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export default function Searchbar(props) {
  const updateSearch = (event) => {
    console.log(props.data);
    let searchValue = event.target.value;
    const searchedData = props.data.filter((data) =>
      data.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );

    props.setSearchedData(searchedData);
    console.log(searchedData);
    if (searchedData.length > 0) {
      props.setSearchValue(event.target.value);
    }
  };

  return (
    <div id="searchDiv">
      <p>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </p>
      <input
        type="text"
        id="searchInput"
        placeholder="Search for a country..."
        defaultValue={props.searchValue}
        onChange={updateSearch}
      ></input>
    </div>
  );
}
