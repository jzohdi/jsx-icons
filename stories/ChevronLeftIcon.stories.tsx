
import React from "react";
import { Story } from "@storybook/react";
import { ChevronLeftIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "ChevronLeftIcon",
	component: ChevronLeftIcon,
};

const Template: Story<JSXIconProps> = (args) => <ChevronLeftIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
