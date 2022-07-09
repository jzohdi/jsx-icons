
import React from "react";
import { Story } from "@storybook/react";
import { HorizontalLineIcon } from "../../src";
import { IconProps } from "../icons/types";

export default {
	title: "HorizontalLineIcon",
	component: HorizontalLineIcon,
};

const Template: Story<IconProps> = (args) => <HorizontalLineIcon {...args} />;

export const DefaultColorAndSize = Template.bind({});	
