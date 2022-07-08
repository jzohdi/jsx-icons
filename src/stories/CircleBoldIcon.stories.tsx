
import React from "react";
import { Story } from "@storybook/react";
import { CircleBoldIcon } from "../../src";
import { IconProps } from "../icons/types";

export default {
	title: "CircleBoldIcon",
	component: CircleBoldIcon,
};

const Template: Story<IconProps> = (args) => <CircleBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});	
