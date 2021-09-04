import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
`;

const Logo = styled.img`
`;

const HeaderComponent = () => {
  return (
    <Wrapper>
      <Logo src="/images/logo/logo-01@2x.png" />
    </Wrapper>
  );
};

export default HeaderComponent;