var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/app');
var SCSS_DIR = path.resolve(__dirname, 'src/scss');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'index.js?r=[hash:12]',
  },
  // devtool: 'inline-source-map',
  module : {
    loaders : [
      {
        test :/\.(scss|sass)?/i,
        include : [
          SCSS_DIR
        ],
        use: ExtractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
        })
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 8000,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename:'index.css?r=[hash:12]'
    }),
    new HtmlWebpackPlugin({
      title: 'Irusha Vidanamadura',
      template: './static/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'static/img',
        to: 'static/img',
      }
    ])
  ],
};

module.exports = config;