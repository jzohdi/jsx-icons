
import React from "react";
import { Story } from "@storybook/react";
import { DiamondBoldIcon } from "../../src";
import { IconProps } from "../icons/types";

export default {
	title: "DiamondBoldIcon",
	component: DiamondBoldIcon,
};

const Template: Story<IconProps> = (args) => <DiamondBoldIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});	
