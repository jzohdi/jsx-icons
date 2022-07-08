import React from "react";
import { Story } from "@storybook/react";
import { PencilBoldIcon } from "../../src";
import { IconProps } from "../icons/types";

export default {
  title: "Pencil",
  component: PencilBoldIcon,
};

const Template: Story<IconProps> = (args) => <PencilBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});
