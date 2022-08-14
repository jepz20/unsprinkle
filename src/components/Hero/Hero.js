import React from "react";
import styled from "styled-components/macro";

const Hero = () => {
  const srcBase = "/images/hero-img";
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={`${srcBase}.avif 1x,
          ${srcBase}@2x.avif 2x,
          ${srcBase}@3x.avif 3x
          `}
        />
        <source
          type="image/jpeg"
          srcSet={`${srcBase}.jpg 1x,
          ${srcBase}@2x.jpg 2x,
          ${srcBase}@3x.jpg 3x"
          `}
        />
        <HeroImage
          src={`${srcBase}.jpg`}
          alt="Big center example of a cat with big blue eyes in a black ground"
        />
      </picture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
