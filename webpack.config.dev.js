const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  return {
    entry: "./src/index.js", // takes by default on empty /src/index
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
      publicPath: "/",
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
          use: [
            { loader: "url-loader?limit=100000" },
            { loader: "file-loader" },
          ],
        },
      ],
    },resolve: {
      extensions: ['.js', '.jsx'],
      roots: [__dirname, path.resolve(__dirname, 'client')],
      alias: {
        '@': path.resolve(__dirname, './client'),
        shared: path.resolve(__dirname, './shared'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "/public/index.html") /*,
  favicon: '.public/faviconNamexd.notengo',*/,
      }),
      new Dotenv({
        path: `./.env${env.file ?`.${env.file}`: ''}`
      })
    ],
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  };
};
