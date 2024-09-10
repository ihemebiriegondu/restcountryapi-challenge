import React from "react";

export default function Countrycard(props) {
  return (
    <article onClick={props.showDetails}>
      <div className="backdrop" id={props.countryFlag}></div>
      <img src={props.countryFlag} alt="countryImg"></img>
      <div className="cardContent">
        <h6>{props.countryName}</h6>
        <div>
          <p>
            Population: <span>{props.population}</span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
