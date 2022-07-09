
import React from "react";
import { Story } from "@storybook/react";
import { ArrowRightBoldIcon } from "../../src";
import { IconProps } from "../icons/types";

export default {
	title: "ArrowRightBoldIcon",
	component: ArrowRightBoldIcon,
};

const Template: Story<IconProps> = (args) => <ArrowRightBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});	
