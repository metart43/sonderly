import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { THEME } from "../constants";
import HeaderComponent from "../components/Header/HeaderComponent";
import Hero from "../components/Hero";
import CardContainer from "../components/CardSection/CardContainer";

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <HeaderComponent />
        <Hero />
        <CardContainer />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
