import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { THEME } from "../constants";
import HeaderComponent from "../components/Header/HeaderComponent";

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <HeaderComponent />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
