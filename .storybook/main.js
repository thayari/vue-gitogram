/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/components/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    })
    return config
  }
};
export default config;
