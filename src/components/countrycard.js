import React from "react";

import sampleImg from '../abstract-flowing-neon-wave-background.jpg'

export default function Countrycard() {
  return (
    <article>
      <img src={sampleImg} alt="countryImg"></img>
      <div className="cardContent">
        <h6>Germany</h6>
        <div>
          <p>
            Population: <span>81,770,900</span>
          </p>
          <p>
            Region: <span>Europe</span>
          </p>
          <p>
            Capital: <span>Berlin</span>
          </p>
        </div>
      </div>
    </article>
  );
}
