import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Search
} from "react-feather";


const icons = {
  search: Search
};

const Icon = ({ id, color = "#1C2126", size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
    p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

Icon.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  strokeWidth: PropTypes.string,
};


export default Icon;