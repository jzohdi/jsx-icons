
import React from "react";
import { Story } from "@storybook/react";
import { DownloadIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "DownloadIcon",
	component: DownloadIcon,
};

const Template: Story<JSXIconProps> = (args) => <DownloadIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
