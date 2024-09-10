import React from "react";
import Searchbar from "./searchbar";
import Filter from "./filter";

import "../componentsStyles/querydiv.css";

export default function QueryDiv(props) {
  return (
    <section id="queryDiv">
      <Searchbar
        data={props.isFiltered ? props.filteredData : props.data}
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
        setSearchedData={props.setSearchedData}
      />
      <Filter
        data={props.data}
        activeOption={props.activeOption}
        setActiveOption={props.setActiveOption}
        isFiltered={props.isFiltered}
        setIsFiltered={props.setIsFiltered}
        setFilteredData={props.setFilteredData}
        setSearchValue={props.setSearchValue}
      />
    </section>
  );
}
