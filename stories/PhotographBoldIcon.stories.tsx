
import React from "react";
import { Story } from "@storybook/react";
import { PhotographBoldIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "PhotographBoldIcon",
	component: PhotographBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <PhotographBoldIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
