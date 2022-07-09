import React from "react";
import { Story } from "@storybook/react";
import { ArrowRightBoldIcon } from "../../src";
import { JSXIconProps } from "../types";

export default {
  title: "ArrowRightBoldIcon",
  component: ArrowRightBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => (
  <ArrowRightBoldIcon {...args} />
);

export const DefaultColorAndSize = Template.bind({});
