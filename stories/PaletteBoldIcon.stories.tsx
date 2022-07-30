
import React from "react";
import { Story } from "@storybook/react";
import { PaletteBoldIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "PaletteBoldIcon",
	component: PaletteBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <PaletteBoldIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
