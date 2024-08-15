import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

const production = process.env.NODE_ENV === "production";

const FILENAME = fileURLToPath(import.meta.url);
const DIRNAME = path.dirname(FILENAME);

export default {
  entry: { pikuApp: path.resolve(DIRNAME, "./src/App.tsx") },
  output: {
    path: path.resolve(DIRNAME, "./dist"),
    publicPath: "/frontend/dist/chunks/",
    filename: production ? "[name].[contenthash].js" : "[name].js",
  },
  devtool: "eval-cheap-module-source-map",
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
    new HtmlWebpackPlugin({
      title: "Piku",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: production ? "[name].[contenthash].css" : "[name].css",
    }),
    new ESLintPlugin({
      failOnError: false,
      failOnWarning: false,
      configType: "flat",
      eslintPath: "eslint/use-at-your-own-risk",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: ["node_modules"],
    }),
  ],
  devServer: {
    watchFiles: path.join(DIRNAME, "src"),
    compress: true,
    hot: true,
    open: true,
    host: "localhost",
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
      "@components": path.resolve(DIRNAME, "src/components/"),
      "@layout": path.resolve(DIRNAME, "src/layout/"),
      "@ui": path.resolve(DIRNAME, "src/ui/"),
      "@assets": path.resolve(DIRNAME, "src/assets/"),
      "@store": path.resolve(DIRNAME, "src/store/"),
      "@hooks": path.resolve(DIRNAME, "src/hooks/"),
      "@utils": path.resolve(DIRNAME, "src/utils/"),
      "@api": path.resolve(DIRNAME, "src/api/"),
      "@styles": path.resolve(DIRNAME, "src/assets/styles/"),
      "@": path.resolve(DIRNAME, "src/"),
    },
  },
  mode: process.env.NODE_ENV,
};
