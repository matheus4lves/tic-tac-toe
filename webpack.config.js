const path = require("path");
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
  require("postcss-preset-env"),
];

module.exports = {
  entry: "./app/Main.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js",
  },
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "app"),
    port: 3000,
    historyApiFallback: true,
    host: "0.0.0.0",
    useLocalIp: true,
    hot: true,
    open: {
      app: ["/opt/firefox-84.0b4/firefox/firefox", "--new-window"],
    },
  },
  target: "web",
};
