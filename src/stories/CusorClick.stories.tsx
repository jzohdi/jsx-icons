import React from "react";
import { Story } from "@storybook/react";
import { IconProps } from "../icons/types";
import CursorClickIcon from "../icons/CursorClickIcon";

export default {
  title: "CusorClick",
  component: CursorClickIcon,
};

const Template: Story<IconProps> = (args) => <CursorClickIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
