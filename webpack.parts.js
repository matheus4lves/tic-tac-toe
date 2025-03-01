const HtmlWebpackPlugin = require("html-webpack-plugin");
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
  require("postcss-preset-env"),
];

const generateHTML = () => ({
  plugins: [new HtmlWebpackPlugin()],
});

const loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
});

const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
});

const transpileTypeScript = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", "ts", ".js"],
  },
});

const devServer = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
});

module.exports = {
  generateHTML,
  loadCSS,
  loadImages,
  transpileTypeScript,
  devServer,
};
