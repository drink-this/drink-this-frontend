const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && "cheap-module-source-map",
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/js/[name].[contenthash:8].js",
      publicPath: "/",
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development"
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "src/css/*.css",
              },
            },
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "assets/css/[name].[contenthash:8].css",
          chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
          }),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(
            isProduction ? "production" : "development"
          )
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "public/index.html"),
          inject: true
        })
      ].filter(Boolean),
      optimization: {
        minimize: isProduction,
        minimizer: [
          new TerserWebpackPlugin({
            terserOptions: {
              compress: {
                comparisons: false
              },
              mangle: {
                safari10: true
              },
              output: {
                comments: false,
                ascii_only: true
              },
              warnings: false
            }
          }),
          new OptimizeCssAssetsPlugin()
        ]
      },
      devServer: {
        compress: true,
        historyApiFallback: true,
        open: true,
        overlay: true
      }
  };
};