import React from "react";
import Icon from "../components/Icon";

export default {
  title: "Main/Icon",
  component: Icon,
  argTypes: {
    color: { control: { type: "color" } },
  },
};

const Template = (args) => <Icon {...args} />;

export const Regular = Template.bind({});

Regular.args = {
  id: "search",
  size: "16px",
  strokeWidth: "2"
};