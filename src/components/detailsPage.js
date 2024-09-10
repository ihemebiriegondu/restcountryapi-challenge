import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../componentsStyles/detailsPages.css";

export default function DetailsPage(props) {
  console.log(props.detailData);

  return (
    <section id="detailsPage">
      <p id="backBtn" onClick={() => props.setShowDetails(false)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </p>
      <article>
        <div>
          <img src={props.detailData.flags.png} alt="countryImg"></img>
        </div>

        <aside>
          <h1>{props.detailData.name.common}</h1>
          <div id="infoDiv">
            <div id="countryInfoDiv">
              <div>
                <p>
                  Native Name:
                  <span>
                    {Object.values(props.detailData.name.nativeName)[0].common}
                  </span>
                </p>
                <p>
                  Population: <span>{props.detailData.population}</span>
                </p>
                <p>
                  Region: <span>{props.detailData.region}</span>
                </p>
                <p>
                  Sub region: <span>{props.detailData.subregion}</span>
                </p>
                <p>
                  Capital: <span>{props.detailData.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>{props.detailData.tld[0]}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span>
                    {Object.values(props.detailData.currencies)[0].name}
                  </span>
                </p>
                <p>
                  Languages:
                  <span>
                    {Object.values(props.detailData.languages).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <div id="borderCountriesDiv">
              <p>Border Countries:</p>
              <div id="borderCountries">
                <span>France</span>
                <span>France</span>
                <span>France</span>
              </div>
            </div>
          </div>
        </aside>
      </article>
    </section>
  );
}
