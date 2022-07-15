
import React from "react";
import { Story } from "@storybook/react";
import { TrashCanIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "TrashCanIcon",
	component: TrashCanIcon,
};

const Template: Story<JSXIconProps> = (args) => <TrashCanIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
