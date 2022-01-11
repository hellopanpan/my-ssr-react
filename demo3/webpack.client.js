// webpack.client.js
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, "./src", dir);
module.exports = {
  mode: "development",
  entry: "./client.js",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    alias: {
      "@src": resolve("./"),
      "@components": resolve("components"),
      "@container": resolve("container"),
    },
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
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
        test: /\.css?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
