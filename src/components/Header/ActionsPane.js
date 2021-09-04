import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Wrapper = styled.div``;

const ActionsPane = () => {
  return <Wrapper>
    <Button size="regular" type="logIn" label="Log In" />
  </Wrapper>;
};

export default ActionsPane;
