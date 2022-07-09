import React from "react";
import { Story } from "@storybook/react";
import { DiamondBoldIcon } from "../../src";
import { JSXIconProps } from "../types";

export default {
  title: "DiamondBoldIcon",
  component: DiamondBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <DiamondBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
