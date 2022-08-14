
import React from "react";
import { Story } from "@storybook/react";
import { ChevronRightIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "ChevronRightIcon",
	component: ChevronRightIcon,
};

const Template: Story<JSXIconProps> = (args) => <ChevronRightIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
