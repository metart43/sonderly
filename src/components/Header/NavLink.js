import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.black[100]};
  letter-spacing: 0px;
`;

const NavLink = ({ label }) => (
  <Wrapper>
    {label}
  </Wrapper>
);

NavLink.propTypes = {
  label: PropTypes.string
};

export default NavLink;

