const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { serverConfig } = require('./webpack.config.common');

const isProduction = process.env.NODE_ENV === 'production';

const developmentConfig = {
  ...serverConfig,
  entry: [
    'webpack/hot/poll?1000',
    './app/server/index.js'
  ],
  watch: true,
  mode: 'development',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ...process.env,
      BUILD_TARGET: 'server',
      NODE_ENV: 'development'
    }),
    new CopyWebpackPlugin([
      { from: 'app/public/images', to: 'public/images' }
    ])
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'server.js',
    publicPath: '/public'
  }
};

const productionConfig = {
  ...serverConfig,
  entry: [
    './app/server/index.js'
  ],
  mode: 'production',
  externals: [nodeExternals()],
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ...process.env,
      BUILD_TARGET: 'server',
      NODE_ENV: 'production'
    }),
    new CopyWebpackPlugin([
      { from: 'app/public/images', to: 'public/images' },
    ])
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          }
        }
      }),
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'production', 'server'),
    filename: 'index.js',
    publicPath: '/public'
  }
}

module.exports = isProduction ? productionConfig : developmentConfig;