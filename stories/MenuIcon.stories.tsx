
import React from "react";
import { Story } from "@storybook/react";
import { MenuIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "MenuIcon",
	component: MenuIcon,
};

const Template: Story<JSXIconProps> = (args) => <MenuIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
