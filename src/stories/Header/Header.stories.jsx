import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";

export default {
  title: "Main/Header",
  component: HeaderComponent,
};

const Template = (args) => <HeaderComponent {...args} />;

export const Header = Template.bind({});
