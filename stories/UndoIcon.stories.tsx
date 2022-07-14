
import React from "react";
import { Story } from "@storybook/react";
import { UndoIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "UndoIcon",
	component: UndoIcon,
};

const Template: Story<JSXIconProps> = (args) => <UndoIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
