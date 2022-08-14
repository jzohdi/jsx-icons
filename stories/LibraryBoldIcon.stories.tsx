
import React from "react";
import { Story } from "@storybook/react";
import { LibraryBoldIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "LibraryBoldIcon",
	component: LibraryBoldIcon,
};

const Template: Story<JSXIconProps> = (args) => <LibraryBoldIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
