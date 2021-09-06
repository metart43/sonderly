import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SIZES = {
  small: {
    "--fontSize": 1 + "rem",
    "--padding": "4px 12px"
  },
  long: {
    "--fontSize": 1 + "rem",
    "--padding": "14px 64px"
  },
  regular: {
    "--fontSize": 1 + "rem",
    "--padding": "12px 52px"
  }
};


const Button = ({ size, label, backgroundColor }) => {
  const styles = SIZES[size];
  return <ButtonBase styles={{ ...styles, backgroundColor }}>{label}</ButtonBase>;
};

const ButtonBase = styled.button`
  font-size: ${props => props.styles["--fontSize"]};
  padding: ${props => props.styles["--padding"]};
  border-radius: 100px;
  border: none;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.styles.backgroundColor || props.theme.colors.primary};
`;

Button.propTypes = {
  size: PropTypes.oneOf(["small", "long", "regular"]),
  label: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Button;
