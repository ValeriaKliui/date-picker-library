import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config?.resolve?.alias,
        assets: path.resolve(__dirname, "../src/assets"),
        providers: path.resolve(__dirname, "../src/providers"),
        components: path.resolve(__dirname, "../src/components"),
        constants: path.resolve(__dirname, "../src/constants"),
        decorators: path.resolve(__dirname, "../src/decorators"),
        hooks: path.resolve(__dirname, "../src/hooks"),
        utils: path.resolve(__dirname, "../src/utils"),
      },
    };
    const imageRule = config.module.rules.find(
      (rule) => rule?.["test"]?.test(".svg")
    );
    if (imageRule) {
      imageRule["exclude"] = /\.svg$/;
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
};
export default config;
