
import React from "react";
import { Story } from "@storybook/react";
import { ChevronUpIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "ChevronUpIcon",
	component: ChevronUpIcon,
};

const Template: Story<JSXIconProps> = (args) => <ChevronUpIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
