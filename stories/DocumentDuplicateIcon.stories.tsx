
import React from "react";
import { Story } from "@storybook/react";
import { DocumentDuplicateIcon } from "../src";
import { JSXIconProps } from "../src/types";

export default {
	title: "DocumentDuplicateIcon",
	component: DocumentDuplicateIcon,
};

const Template: Story<JSXIconProps> = (args) => <DocumentDuplicateIcon {...args} />

export const DefaultColorAndSize = Template.bind({});
