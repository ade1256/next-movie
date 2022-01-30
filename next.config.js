/** @type {import('next').NextConfig} */
// 1. import default from the plugin module
const createStyledComponentsTransformer =
  require("typescript-plugin-styled-components").default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();
const nextConfig = {
  reactStrictMode: true,
  rules: [
    {
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader",
      options: {
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer],
        }),
      },
    },
  ],
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
