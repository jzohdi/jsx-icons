
import React from "react";
import { Story } from "@storybook/react";
import { TrashCanBoldIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "TrashCanBoldIcon",
	component: TrashCanBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <TrashCanBoldIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
