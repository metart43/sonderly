import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Icon from "../Icon";
import France from "../../images/flags/Ellipse_198@2x.png";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 48px;
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 9.2vw - 4.5rem, 2.5rem);
  flex: 2.5;
  justify-content: flex-end;
`;

const Country = styled.img`
  height: 25px;
  margin-left: 12px;
`;

const ActionsPane = () => {
  return (
    <Wrapper>
      <Icon id="search" size="24px" strokeWidth="2px" />
      <Button size="regular" type="logIn" label="Log In" />
      <Country src={France} />
    </Wrapper>
  );
};

export default ActionsPane;
