'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

// PATHS
var PATHS = {
  app: __dirname + '/app',
  deploy: __dirname + '/deploy'
};

module.exports = {
  context: PATHS.app,
  entry: {
    app: ['index.js']
  },
  output: {
    path: PATHS.deploy,
    filename: 'js/index-min.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel!jshint',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]?[hash]'
      },
      {
        test: /\.html/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    root: PATHS.app
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV_VARS: {
        deploymentMode: {
          production: process.env.NODE_ENV === 'production'
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html'
    })
  ]
};
