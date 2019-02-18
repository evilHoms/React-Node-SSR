const path = require('path');
require('dotenv').config();

const clientConfig = {
  target: 'web',
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.js?$|\.jsx?$/,
      use: 'babel-loader',
      include: [
        path.join(__dirname, '..', 'app', 'client')
      ]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },{
      test: /\.(scss|sass)$/,
      use: 'sass-loader',
    }]
  },
}

const serverConfig = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },{
      test: /\.(scss|sass)$/,
      use: 'sass-loader',
    }]
  },
}

module.exports = { clientConfig, serverConfig };