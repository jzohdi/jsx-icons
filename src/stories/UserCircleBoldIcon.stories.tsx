import React from "react";
import { Story } from "@storybook/react";
import { UserCircleBoldIcon } from "../../src";
import { JSXIconProps } from "../types";

export default {
  title: "UserCircleBoldIcon",
  component: UserCircleBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => (
  <UserCircleBoldIcon {...args} />
);

export const DefaultColorAndSize = Template.bind({});
