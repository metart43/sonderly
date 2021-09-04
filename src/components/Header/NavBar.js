import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const Wrapper = styled.nav`
  display: flex;
`;


const NavBar = () => {
  return (
    <Wrapper>
      <NavLink label="Home" />
      <NavLink label="Services" />
      <NavLink label="About" />
      <NavLink label="FAQs" />
      <NavLink label="Contact" />
    </Wrapper>
  );
};

export default NavBar;

