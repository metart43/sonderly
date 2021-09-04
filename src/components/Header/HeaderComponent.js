import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";
import ActionsPane from "./ActionsPane";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderComponent = () => {
  return (
    <Wrapper>
      <Logo />
      <NavBar />
      <ActionsPane />
    </Wrapper>
  );
};

export default HeaderComponent;