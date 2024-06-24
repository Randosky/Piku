const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: { pikuApp: path.resolve(__dirname, "./src/App.tsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: production ? "[name].[contenthash].js" : "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs|mts)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(s[ac]ss|css)$/i,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Piku",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: production ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    compress: true,
    port: 5433,
    client: {
      // Показывает ошибки при компиляции в самом браузере
      overlay: {
        // Ошибки
        errors: true,

        // Предупреждения
        warnings: false,
      },

      // Показывает прогесс компиляции
      progress: true,
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@ui": path.resolve(__dirname, "src/ui/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@redux": path.resolve(__dirname, "src/store/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@styles": path.resolve(__dirname, "src/assets/styles/"),
      "@": path.resolve(__dirname, "src/"),
    },
  },
  mode: process.env.NODE_ENV,
};
