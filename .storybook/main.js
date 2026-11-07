module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // Storybook 6.5 asks webpack for source maps of the preview. With current
  // webpack and terser-webpack-plugin they survive minification, so a static
  // build would publish .map files holding the stories' and src/'s source;
  // older versions dropped them. Keep static builds free of them, as before.
  webpackFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") config.devtool = false;
    return config;
  },
};
