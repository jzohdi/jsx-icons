
import React from "react";
import { Story } from "@storybook/react";
import { RedoIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "RedoIcon",
	component: RedoIcon,
};

const Template: Story<JSXIconProps> = (args) => <RedoIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
