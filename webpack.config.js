const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
      publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },  
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          }
        ]
    },
    devServer: {
      historyApiFallback: true,
    },
    devtool: 'eval',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
}