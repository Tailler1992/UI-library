const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'), // Базовый каталог, абсолютный путь
  entry: './js/main.js', // Точка входа

  output: { // Выходные данные    
    filename: 'script.js', // Имя основного файла    
    path: path.resolve(__dirname, 'dist'), // Путь куда складывать файл *.js      
    clean: true, // Опция для очистки папки dist
  },

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],

  module: {
    rules: [{
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  }


};