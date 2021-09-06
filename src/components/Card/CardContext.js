import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 85%;
  margin-bottom: 24px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;
const Description = styled.p`
  font-size: 1.625rem;
  color: ${props => props.theme.colors.primary};
`;

const CardContext = ({ title = "Fact", description = "ABA has been shown to be the most researched and scientifically proven treatment forAutism Spectrum Disorder(ASD)." }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

CardContext.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default CardContext;
