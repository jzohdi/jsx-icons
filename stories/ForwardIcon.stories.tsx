
import React from "react";
import { Story } from "@storybook/react";
import { ForwardIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "ForwardIcon",
	component: ForwardIcon,
};

const Template: Story<JSXIconProps> = (args) => <ForwardIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
