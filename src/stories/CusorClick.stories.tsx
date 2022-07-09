import React from "react";
import { Story } from "@storybook/react";
import { CursorClickIcon } from "../../src";
import { JSXIconProps } from "../types";

export default {
  title: "CusorClick",
  component: CursorClickIcon,
};

const Template: Story<JSXIconProps> = (args) => <CursorClickIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
