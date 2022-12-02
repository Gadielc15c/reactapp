const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.js", // takes by default on empty /src/index
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|gif)$/,
        use: [{ loader: "url-loader?limit=100000" }, { loader: "file-loader" }],
      },
    ],
  },plugins:[new HtmlWebpackPlugin({
template: path.join(__dirname, '/public/index.html')/*,
favicon: '.public/faviconNamexd.notengo',*/
  })
],devServer:{
    port: 3000
}
};
