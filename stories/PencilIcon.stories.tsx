import React from "react";
import { Story } from "@storybook/react";
import { PencilBoldIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
  title: "Pencil",
  component: PencilBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <PencilBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
