import React from "react";
import { Story } from "@storybook/react";
import { CircleBoldIcon } from "../../src";
import { JSXIconProps } from "../types";

export default {
  title: "CircleBoldIcon",
  component: CircleBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <CircleBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
