import React from "react";
import Searchbar from "./searchbar";
import Filter from "./filter";

import "../componentsStyles/querydiv.css";

export default function QueryDiv(props) {
  return (
    <section id="queryDiv">
      <Searchbar />
      <Filter
        data={props.data}
        activeOption={props.activeOption}
        setActiveOption={props.setActiveOption}
        isFiltered={props.isFiltered}
        setIsFiltered={props.setIsFiltered}
        setFilteredData={props.setFilteredData}
      />
    </section>
  );
}
