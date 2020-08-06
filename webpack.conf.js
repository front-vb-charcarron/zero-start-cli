const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "none",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader"],
      },
      // 由于vue-style-loader无法渲染less和scss样式,故使用style-loader
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        include: /src/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              fallback: {
                loader: "file-loader",
                options: {
                  outputPath: "assets",
                  name: "[name].[hash:8].[ext]",
                  // file-loader 默认是使用es模块化引入图片，而vue-loader使用commonjs引入图片
                  // https://vue-loader.vuejs.org/zh/guide/asset-url.html#%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99
                  esModule: false
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      title: "从0搭建vue cli",
      templateParameters: {
        BASE_URL: "/"
      },
      favicon: path.resolve(__dirname, "./public/favicon.ico")
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
};
