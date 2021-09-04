import React from "react";
import LogoImage from "../../images/logo/logo-01@2x.png";
import styled from "styled-components";

const Wrapper = styled.img`
  height: 60px;
`;

const Logo = () => (
  <Wrapper src={LogoImage} alt="Logo" />
);

export default Logo;