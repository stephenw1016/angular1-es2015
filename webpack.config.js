var webpack = require('webpack');
var path = require('path');

const APP_PATH = 'app/src';
const APP_DIR = path.resolve(__dirname, APP_PATH);
const BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: {
    app: APP_DIR + '/app.js',
    vendor: APP_DIR + '/vendor.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  resolve: {
    root: [path.resolve('./' + APP_PATH)],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.js?/, include: APP_DIR, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './vendor.bundle.js')
  ]
};

module.exports = config;