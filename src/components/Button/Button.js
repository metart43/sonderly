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
    "--padding": "12px 20px"
  },
  regular: {
    "--fontSize": 1 + "rem",
    "--padding": "12px 52px"
  }
};


const Button = ({ size, type, label, backgroundColor }) => {
  const styles = SIZES[size];
  let Component;

  if (type === "logIn") {
    Component = ButtonBase;
  }

  return <Component styles={{ ...styles, backgroundColor }}>{label}</Component>;
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
  type: PropTypes.oneOf(["logIn", "card", "singUp"]),
  label: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Button;
