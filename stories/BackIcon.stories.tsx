
import React from "react";
import { Story } from "@storybook/react";
import { BackIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "BackIcon",
	component: BackIcon,
};

const Template: Story<JSXIconProps> = (args) => <BackIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
