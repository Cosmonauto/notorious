import React from "react";

import { FeatureContainer, FeatureButton } from "./FeatureElement";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>
        Our new yummy product! <br />
        Donuts
      </h1>

      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
