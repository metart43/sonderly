import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Main/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  size: "regular",
  type: "logIn",
  label: "Log In",
};

