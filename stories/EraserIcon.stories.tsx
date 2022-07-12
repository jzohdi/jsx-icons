import React from "react";
import { Story } from "@storybook/react";
import { EraserIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
  title: "EraserIcon",
  component: EraserIcon,
};

const Template: Story<JSXIconProps> = (args) => <EraserIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
