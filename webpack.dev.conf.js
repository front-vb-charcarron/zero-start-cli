const { merge } = require("webpack-merge");
const base = require("./webpack.conf");
const path = require("path");

module.exports = merge(base, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  output: {
    // 生产环境和开发环境静态资源目录不一样
    publicPath: "/dist/"
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join(__dirname, "public", "index.html"),
        },
        {
          from: "/",
          to: path.posix.join(__dirname, "public", "index.html"),
        }
      ],
    },
    contentBase: false,
    // gzip
    compress: true,
    host: "127.0.0.1",
    port: "3987",
    publicPath: "/dist/",
    open: true
  }
});
