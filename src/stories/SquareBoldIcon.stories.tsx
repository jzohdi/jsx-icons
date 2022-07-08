import React from "react";
import { Story } from "@storybook/react";
import { SquareBoldIcon } from "../../src";
import { IconProps } from "../icons/types";

export default {
  title: "SquareBoldIcon",
  component: SquareBoldIcon,
};

const Template: Story<IconProps> = (args) => <SquareBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
