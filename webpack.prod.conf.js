const { merge } = require("webpack-merge");
const base = require("./webpack.conf");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  devtool: "source-map",
  output: {
    // 生产环境和开发环境静态资源目录不一样
    publicPath: "./"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});
