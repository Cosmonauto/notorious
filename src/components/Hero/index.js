import React, { useState } from "react";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "../Hero/HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Yummiest chocolate </HeroH1>
          <HeroP>Fast delivery</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
