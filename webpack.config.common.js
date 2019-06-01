const path = require('path');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

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
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: { 
          limit: 8000,
          name: '[name].[ext]',
          publicPath: 'images',
          outputPath: isProduction ? 'images' : path.join('public', 'images'),
        } 
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          webp: {
            quality: 75
          }
        }
      }],
    }],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'app', 'client', 'App', 'components'),
      Client: path.resolve(__dirname, 'app', 'client'),
    }
  }
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
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: { 
          limit: 8000,
          name: '[name].[ext]',
          publicPath: 'images',
          outputPath: 'public/images',
        } 
      }, {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          webp: {
            quality: 75
          }
        }
      }],
    }, {
      test: /\.(ico)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'public/images',
          outputPath: 'public/images',
        }
      }]
    }],
  },
  resolve: {
    alias: {
      Server: path.resolve(__dirname, 'app', 'server'),
      Components: path.resolve(__dirname, 'app', 'client', 'App', 'components'),
      Client: path.resolve(__dirname, 'app', 'client'),
    }
  }
}

module.exports = { clientConfig, serverConfig };