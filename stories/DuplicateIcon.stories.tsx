
import React from "react";
import { Story } from "@storybook/react";
import { DuplicateIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "DuplicateIcon",
	component: DuplicateIcon,
};

const Template: Story<JSXIconProps> = (args) => <DuplicateIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
