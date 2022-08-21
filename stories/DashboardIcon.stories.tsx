
import React from "react";
import { Story } from "@storybook/react";
import { DashboardIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "DashboardIcon",
	component: DashboardIcon,
};

const Template: Story<JSXIconProps> = (args) => <DashboardIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
