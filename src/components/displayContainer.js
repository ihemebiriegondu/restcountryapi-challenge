import React from "react";
import Countrycard from "./countrycard";

import "../componentsStyles/displayCards.css";

export default function DisplayContainer(props) {
  const countryData = props.countryData;

  const showDetailsFunction = (event) => {
    const targetData = event.target.id;

    for (let i = 0; i < countryData.length; i++) {
      if (countryData[i].flags.png === targetData) {
        props.setDetailData(countryData[i]);
      }
    }
    
    props.setShowDetails(true);
  };

  return (
    <section id="displayContainer">
      {countryData &&
        countryData.map((country, index) => (
          <Countrycard
            key={index}
            showDetails={showDetailsFunction}
            countryFlag={country.flags.png}
            countryName={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
    </section>
  );
}
