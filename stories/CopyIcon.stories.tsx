
import React from "react";
import { Story } from "@storybook/react";
import { CopyIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "CopyIcon",
	component: CopyIcon,
};

const Template: Story<JSXIconProps> = (args) => <CopyIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
