import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CardAvatar from "./CardAvatar";
import CardHeader from "./CardHeader";
import CardContext from "./CardContext";
import CardFooter from "./CardFooter";

const BaseCard = styled.article`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 3px 10px #00000029;
`;

const VerticalCard = styled(BaseCard)`
  padding: 20px 14px 20px 32px;
  flex-direction: ${props => props.style.alignment};
  flex-basis: ${props => props.style.size + "px"};
`;

const HorizontalCard = styled(BaseCard)`
  padding: 20px 64px 20px 24px;
  flex-direction: ${props => props.style.alignment};
  width: ${props => props.style.size + "px"};
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderSection = styled.div`
  display:flex;
  flex-direction: ${props => props.style.alignment === "row-reverse" ? "column-reverse" : "column"};
`;

const MainSection = styled.div``;

const CardWrapper = ({ alignment, size }) => {
  let Card;

  if (alignment === "column") {
    Card = VerticalCard;
  } else if (alignment.includes("row")) {
    Card = HorizontalCard;
  } else {
    Card = BaseCard;
  }

  return (
    <Card style={{ alignment, size }}>
      <HeaderSection style={{ alignment }}>
        <CardAvatar />
        <CardHeader alignment={alignment} />
      </HeaderSection>
      <MainSection >
        <CardContext />
        <CardFooter />
      </MainSection>
    </Card>
  );
};

CardWrapper.propTypes = {
  alignment: PropTypes.oneOf(["row", "column", "row-reverse"]),
  size: PropTypes.number
};

export default CardWrapper;
