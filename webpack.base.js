const path = require("path");
const resolve = (dir) => path.resolve(__dirname, "./src", dir);
module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    alias: {
      "@src": resolve("./"),
      "@components": resolve("components"),
      "@container": resolve("container"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
};
