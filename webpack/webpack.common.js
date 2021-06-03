const path = require('path');
const { basename } = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: '.env' });
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    publicPath: '/dist/',
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ACQID': JSON.stringify(process.env.ACQID),
    }),
    new HtmlWebpackPlugin({
      lang: 'ja-JP',
      title: 'Template Page | よく遊びよく学べ テンプレート',
      filename: path.resolve(__dirname, '../public/index.html'),
      hash: true,
      template: path.resolve(__dirname, '../src/template/index.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(
        __dirname,
        '../src/template/favicon/playwell-icon-260_260_TurquoiseBlue.png'
      ),
      cache: true,
      mode: 'webapp',
      devMode: 'light',
      version: '1.0',
      lang: 'ja-JP',
      favicons: {
        appName: 'React Template',
        appDescription: 'React Template',
        developerName: 'Yutaka Fujii',
        developerURL: 'git@github.com:blackraccoon000/use-react-hooks.git',
        icons: {
          coast: false,
          yandex: false,
        },
      },
      inject: (htmlPlugin) =>
        basename(htmlPlugin.options.filename) === 'index.html',
    }),
  ],
};
