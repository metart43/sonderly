import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 250px;
  background: transparent linear-gradient(101deg, #077762 0%, #077762 31%, #30B290 55%, #66DDDD 100%) 0% 0% no-repeat padding-box;
`;

const HeroText = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.63px;
  font-weight: 800;
  font-size: 2.8rem;
  margin-bottom: 48px;
`;

const Hero = () => {
  return (
    <Wrapper>
      <HeroText>Myths of ABA Dispelled</HeroText>
    </Wrapper>
  );
};

export default Hero;