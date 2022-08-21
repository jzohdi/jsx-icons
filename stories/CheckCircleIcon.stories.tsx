
import React from "react";
import { Story } from "@storybook/react";
import { CheckCircleIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "CheckCircleIcon",
	component: CheckCircleIcon,
};

const Template: Story<JSXIconProps> = (args) => <CheckCircleIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
