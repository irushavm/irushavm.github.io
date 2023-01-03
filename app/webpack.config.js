const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const BUILD_DIR = path.resolve(__dirname, 'dist/')
const APP_DIR = path.resolve(__dirname, 'src/app')
const SCSS_DIR = path.resolve(__dirname, 'src/scss')

module.exports = {
  entry: APP_DIR + '/index.jsx',
  mode: 'development',
  output: {
    path: BUILD_DIR,
    filename: 'index.js?r=[contenthash:12]'
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|sass)?/i,
        include: [
          SCSS_DIR
        ],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    allowedHosts: 'all'
  },
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css?r=[contenthash:12]'
    }),
    new HtmlWebpackPlugin({
      title: 'Irusha Vidanamadura',
      template: './static/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static/img', to: 'static/img' }
      ]
    })
  ],
  watchOptions: {
    poll: true
  }
}
