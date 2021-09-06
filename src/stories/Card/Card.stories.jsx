import React from "react";
import CardWrapper from "../../components/Card/CardWrapper";

export default {
  title: "Main/Card",
  component: CardWrapper,
};

const Template = (args) => (
  <div style={{ display: "flex" }}>
    <CardWrapper {...args} />
  </div>
);

export const VerticalCard = Template.bind({});

VerticalCard.args = {
  alignment: "column",
  size: 432
};

export const HorizontalCard = Template.bind({});

HorizontalCard.args = {
  alignment: "row-reverse",
  size: 654
};

