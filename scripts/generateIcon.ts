import path from "path";
import fs from "fs";

const args = process.argv;
if (args.length < 3) {
  console.log("expected 3 args. Usage:\nnpm run GI -- [icon name]");
}

const iconName = formatName(args[2]);
const pathToSrcIcon = path.join("src", "icons", `${iconName}.tsx`);
const tsxFile = getTsx(iconName);

// write to src/icon.tsx
fs.writeFile(pathToSrcIcon, tsxFile, { flag: "wx" }, function (err) {
  if (err) throw err;
  console.log("wrote tsx file");
});

// add export default in src/index.ts
const pathToIndex = path.join("src", "index.ts");
const dataForIndex = `\nexport { default as ${iconName} } from "./icons/${iconName}";`;

fs.appendFile(pathToIndex, dataForIndex, function (err) {
  if (err) throw err;
  console.log("wrote to src/index.ts");
});

// add to stories;
const pathToStory = path.join("src", "stories", `${iconName}.stories.tsx`);
const storyTemplate = getStory(iconName);

fs.writeFile(pathToStory, storyTemplate, { flag: "wx" }, function (err) {
  if (err) throw err;
  console.log("wrote tsx file");
});

function formatName(name: string) {
  if (name.includes("Icon")) {
    return name;
  }
  return name + "Icon";
}

function getTsx(name: string): string {
  return `
import React, { ReactElement } from "react";
import { JSXIconProps } from "../types";
import { useDefaults } from "../utils";

export default function ${name}(
iconProps: JSXIconProps
): ReactElement<any, any> {
	const props = useDefaults(iconProps);

	return (
	
	)
}
`;
}

function getStory(name: string): string {
  return `
import React from "react";
import { Story } from "@storybook/react";
import { ${name} } from "../../src";
import { JSXIconProps } from "../types";

export default {
	title: "${name}",
	component: ${name},
};

const Template: Story<JSXIconProps> = (args) => <${name} {...args} />

export const DefaultColorAndSize = Template.bind({});
`;
}
