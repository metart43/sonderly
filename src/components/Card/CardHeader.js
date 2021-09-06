import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.style.cardType === "horizontal" ? "100%" : "65%"};
  flex-direction: column;
  margin-bottom: 12px;
`;

const Header = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Subheader = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const CardHeader = ({ cardType, header = "Myth", subheader = "ABA is not a scientifically proven treatment for autism." }) => (
  <Wrapper style={{ cardType }}>
    <Header>{header}</Header>
    <Subheader>{subheader}</Subheader>
  </Wrapper>
);

CardHeader.propTypes = {
  cardType: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
};

export default CardHeader;