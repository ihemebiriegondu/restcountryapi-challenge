import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../componentsStyles/detailsPages.css";

import sampleImg from "../abstract-flowing-neon-wave-background.jpg";

export default function DetailsPage() {
  return (
    <section id="detailsPage">
      <p id="backBtn">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </p>
      <article>
        <div>
          <img src={sampleImg} alt="countryImg"></img>
        </div>

        <aside>
          <h1>Belgium</h1>
          <div id="infoDiv">
            <div id="countryInfoDiv">
              <div>
                <p>
                  Native Name: <span>Belgie</span>
                </p>
                <p>
                  Population: <span>Belgie</span>
                </p>
                <p>
                  Region: <span>Belgie</span>
                </p>
                <p>
                  Sub region: <span>Belgie</span>
                </p>
                <p>
                  Capital: <span>Belgie</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>Belgie</span>
                </p>
                <p>
                  Currencies: <span>Belgie</span>
                </p>
                <p>
                  Languages: <span>Belgie</span>
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
