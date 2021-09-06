import React from "react";
import styled from "styled-components";
import DotsImage from "../../images/dots.svg";
import PropTypes from "prop-types";

const Avatar = styled.img`
  border-radius: 50%;
  width: var(--image-width);
  height: var(--image-height);
`;

const VerticalDots = styled.img`
  position: absolute;
  top: calc(var(--image-height) / 2 - 50px);
  right: calc(var(--image-width) / 2);
  width: 174px; 
  height: 113px;
`;

const HorizontalDots = styled.img`
  position: absolute;
  top: calc(var(--image-height) / 2 - 50px);
  right: calc((-1 * var(--image-width)) / 4);
  width: 146px;
  height: 95px;
`;

const Wrapper = styled.div`
  position: relative;
  --image-height: 200px;
  --image-width: 200px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${ props => props.style.cardType === "horizontal" ? "0" : "48px"};
`;

const CardAvatar = ({ cardType }) => {
  let DotsComponent;  
  if (cardType === "horizontal") {
    DotsComponent = HorizontalDots;
  }
  else {
    DotsComponent = VerticalDots;
  }
  return (
    <Wrapper style={{ cardType }}>
      <DotsComponent src={DotsImage} />
      <Avatar src="https://picsum.photos/id/237/200/300" />
    </Wrapper>
  );
};

CardAvatar.propTypes = {
  cardType: PropTypes.string,
};

export default CardAvatar;