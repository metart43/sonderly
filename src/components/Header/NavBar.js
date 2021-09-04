import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const Wrapper = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  align-self: center;
  margin: 0 auto;
  flex: 5;  
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

