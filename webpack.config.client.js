const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { clientConfig } = require('./webpack.config.common');

const isProduction = process.env.NODE_ENV === 'production';

const port = (Number(process.env.PORT) || 4000) + 1;
if (!isProduction) {
  console.log('Development Server Port: ' + port);
}

const developmentConfig = {
  ...clientConfig,
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './app/client'
  ],
  mode: 'development',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "BUILD_TARGET": JSON.stringify('client'),
        "NODE_ENV": JSON.stringify('development'),
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '.build'),
    publicPath: `http://localhost:${port}/`,
    filename: 'client.js'
  }
};

const productionConfig = {
  ...clientConfig,
  entry: './app/client',
  mode: 'production',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "BUILD_TARGET": JSON.stringify('client'),
        "NODE_ENV": JSON.stringify('production'),
      }
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true,
          },
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          }
        },
      })
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'production', 'server', 'public'),
    publicPath: '/',
    filename: 'client.js'
  }
};

module.exports = isProduction ? productionConfig : developmentConfig;