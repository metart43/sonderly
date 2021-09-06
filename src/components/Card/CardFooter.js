import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button/Button";

const Wrapper = styled.div``;

const CardFooter = ({ link }) => {
  return (
    <Wrapper>
      <Button label="Read More" size="long" type="card" />
    </Wrapper>
  );
};

CardFooter.propTypes = {
  link: PropTypes.string
};

export default CardFooter;