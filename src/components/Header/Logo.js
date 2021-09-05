import React from "react";
import LogoImage from "../../images/logo/logo-01@2x.png";
import styled from "styled-components";

const Image = styled.img`
  height: 60px;
`;

const ImageWrapper = styled.div`
  flex: 3;
  margin: 24px 0;
  display: flex;
  justify-content: center;
`;

const Logo = () => (
  <ImageWrapper>
    <Image src={LogoImage} alt="Logo" />
  </ImageWrapper>
);

export default Logo;