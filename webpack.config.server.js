const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const developmentConfig = {
  entry: [
    'webpack/hot/poll?1000',
    './app/server/index.js'
  ],
  watch: true,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: 'development',
  externals: [nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
  })],
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
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        ...process.env,
        "BUILD_TARGET": JSON.stringify('server'),
        "NODE_ENV": JSON.stringify('development'),
      }
    }),
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'server.js'
  }
};

const productionConfig = {
  entry: [
    './app/server/index.js'
  ],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: 'production',
  externals: [nodeExternals()],
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
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        ...process.env,
        "BUILD_TARGET": JSON.stringify('server'),
        "NODE_ENV": JSON.stringify('production'),
      }
    }),
  ],
  optimization: {
    splitChunks: { chunks: "all" },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
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
        }
      }),
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'production', 'server'),
    filename: 'index.js',
    publicPath: '/'
  }
}

module.exports = isProduction ? productionConfig : developmentConfig;