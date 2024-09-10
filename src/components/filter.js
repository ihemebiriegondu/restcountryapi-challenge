import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export default function Filter(props) {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const regionsArray = [];
    for (let i = 0; i < props.data.length; i++) {
      const region = props.data[i].region;
      if (!regionsArray.includes(region)) {
        regionsArray.push(region);
      }
    }
    setRegions(regionsArray);

    //for when the back button is clicked from the details page
    if (props.isFiltered) {
      let filterOption = document.querySelector(".countryRegion");
      if (filterOption !== null) {
        document.getElementById("filterPlaceholder").textContent = filterOption.textContent;
        document.querySelectorAll(".filterOption").forEach((option) => {
          if (option.textContent === filterOption.textContent) {
            props.setActiveOption(option.textContent);
          }
        });
      }
    }
  }, [props]);

  const toggleFilterOptions = () => {
    let filterOptions = document.getElementById("filterOptions");
    filterOptions.classList.toggle("show");
  };

  const setRegionFunction = (event) => {
    let filterPlaceholder = document.getElementById("filterPlaceholder");
    let filterOptions = document.getElementById("filterOptions");

    const filteredData = props.data.filter(
      (data) => data.region === event.target.textContent
    );

    //if the same region is clicked twice, the filter goes back to default
    if (filterPlaceholder.textContent === event.target.textContent) {
      filterPlaceholder.textContent = "Filter by Region";
      props.setActiveOption("");
      props.setFilteredData(props.data);
      props.setIsFiltered(false);
    } else {
      filterPlaceholder.textContent = event.target.textContent;
      props.setActiveOption(event.target.textContent);
      props.setFilteredData(filteredData);
      props.setIsFiltered(true);
    }

    document.getElementById("searchInput").value = "";
    props.setSearchValue("");
    filterOptions.classList.remove("show");
  };

  return (
    <div id="filterDiv">
      <div id="filterBtn" onClick={toggleFilterOptions}>
        <p id="filterPlaceholder">Filter by Region</p>
        <FontAwesomeIcon icon={faChevronDown} id="downIcon" />
      </div>

      <div id="filterOptions">
        {regions &&
          regions.map((region, i) => (
            <p
              className={`filterOption ${
                props.activeOption === region ? "active" : ""
              }`}
              key={i}
              onClick={setRegionFunction}
            >
              {region}
            </p>
          ))}
      </div>
    </div>
  );
}
