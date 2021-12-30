const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const merge = require("webpack-merge");
const config = require("./webpack.base");
const resolve = (dir) => path.resolve(__dirname, "./src", dir);
let needRem = resolve("./");

const clientConfig = {
  mode: "production",
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
        include: needRem,
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/build/",
  },
};

module.exports = merge(config, clientConfig);
