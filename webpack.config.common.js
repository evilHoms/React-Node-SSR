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
        path.join(__dirname, 'app', 'client')
      ]
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'isomorphic-style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          }
        },
        'postcss-loader'
      ],
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
        }
      },
        'sass-loader',
        'postcss-loader',
      ],
    }],
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
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        'isomorphic-style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          }
        },
        'postcss-loader'
      ],
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'isomorphic-style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
        }
      }, 
        'sass-loader',
        'postcss-loader',
      ],
    }],
  },
}

module.exports = { clientConfig, serverConfig };