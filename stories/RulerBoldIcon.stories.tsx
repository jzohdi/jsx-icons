import React from "react";
import { Story } from "@storybook/react";
import { RulerBoldIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
  title: "RulerBoldIcon",
  component: RulerBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <RulerBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
