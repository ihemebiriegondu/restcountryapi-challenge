import React from "react";
import Countrycard from "./countrycard";

import '../componentsStyles/displayCards.css'

export default function DisplayContainer() {
  return (
    <section id="displayContainer">
      <Countrycard />
      <Countrycard />
      <Countrycard />
      <Countrycard />
      <Countrycard />
      <Countrycard />
      <Countrycard />
    </section>
  );
}
