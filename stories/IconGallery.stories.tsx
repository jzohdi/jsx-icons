import React, { useState } from "react";
import { Story } from "@storybook/react";
import * as Icons from "../src";
import { JSXIconProps } from "../src/types";

function IconGallery(props: JSXIconProps) {
  const [search, setSearch] = useState("");
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          placeholder="Search Icons"
          style={{
            border: "none",
            padding: 10,
            fontSize: "1rem",
            margin: "auto",
            borderRadius: "5px",
            width: "300px",
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          //   flexWrap: "wrap",
          flexFlow: "row wrap",
          alignItems: "center",
          width: "100%",
          gap: 20,
          //   border: "1px solid black",
          borderRadius: "5px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {Object.entries(Icons)
          .filter(([key, _]) =>
            key.toLowerCase().includes(search.toLowerCase())
          )
          .map(([key, Component]) => {
            return (
              <IconWrapper key={key} title={key}>
                <Component {...props} />
              </IconWrapper>
            );
          })}
      </div>
    </div>
  );
}

type IconWrapperProps = {
  children: React.ReactElement<any, any>;
  title: string;
};

function IconWrapper({ children, title }: IconWrapperProps) {
  return (
    <div
      style={{
        minWidth: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span>{children}</span>
      <p style={{ fontSize: "0.8rem" }}>{title.replace("Icon", "")}</p>
    </div>
  );
}

export default {
  title: "IconGallery",
  component: IconGallery,
};

const Template: Story<JSXIconProps> = (args) => <IconGallery {...args} />;

export const Gallery = Template.bind({});

Gallery.args = {
  color: "#000000",
  size: 20,
  onClick: () => console.log("clicked icon"),
  style: {},
};
