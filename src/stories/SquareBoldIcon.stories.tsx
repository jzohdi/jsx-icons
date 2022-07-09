import React from "react";
import { Story } from "@storybook/react";
import { SquareBoldIcon } from "../../src";
import { JSXIconProps } from "../types";

export default {
  title: "SquareBoldIcon",
  component: SquareBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <SquareBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
