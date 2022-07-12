import React from "react";
import { Story } from "@storybook/react";
import { HorizontalLineIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
  title: "HorizontalLineIcon",
  component: HorizontalLineIcon,
  argTypes: {
    width: {
      control: { type: "number", min: 1, max: 100, step: 1 },
    },
    height: {
      control: { type: "number", min: 1, max: 100, step: 1 },
    },
    size: {
      control: { type: "number", min: 1, max: 100, step: 1 },
    },
  },
};

const Template: Story<JSXIconProps> = (args) => (
  <HorizontalLineIcon {...args} />
);

export const DefaultColorAndSize = Template.bind({});

DefaultColorAndSize.args = {
  size: 20,
  color: "#000000",
  onClick: () => console.log("clicked"),
  className: "my-class-name",
  width: undefined,
  height: undefined,
};
