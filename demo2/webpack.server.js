// webpack.server.js
const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  target: "node",
  entry: "./server.js",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: [
            [
              "@babel/plugin-transform-runtime",
              {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                version: "7.0.0-beta.0",
              },
            ],
          ],
        },
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [nodeExternals()],
};
