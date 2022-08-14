
import React from "react";
import { Story } from "@storybook/react";
import { ChevronDownIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "ChevronDownIcon",
	component: ChevronDownIcon,
};

const Template: Story<JSXIconProps> = (args) => <ChevronDownIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
