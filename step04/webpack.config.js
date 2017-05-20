/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './web/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './index.web.js',
  output: {
    path: path.resolve('web/public'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }, exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }, exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}