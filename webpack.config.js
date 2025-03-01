const path = require("path");
const { merge } = require("webpack-merge");
// Can it be solved with tsc include option?
const parts = require("./webpack.parts.js");

const commonConfig = merge([
  {
    context: path.resolve(__dirname, "app"),
    entry: "./index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
  },
  parts.generateHTML(),
  parts.loadCSS(),
  parts.loadImages(),
  parts.transpileTypeScript(),
]);

const configs = {
  development: merge([parts.devServer()]),
  production: merge([]),
};

module.exports = (_env, argv) => {
  const mode = argv.mode;
  return merge([commonConfig, configs[mode], { mode }]);
};
