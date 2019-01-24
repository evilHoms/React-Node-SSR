const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

const port = (Number(process.env.PORT) || 4000) + 1;
console.log('Development Server Port: ' + port);

module.exports = {
 devtool: 'inline-source-map',
 entry: [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server',
  './app/client'
 ],
 target: 'web',
 module: {
  rules: [{
   test: /\.js?$|\.jsx?$/,
   use: 'babel-loader',
   include: [
    path.join(__dirname, 'app', 'client')
   ]
  }]
 },
 plugins: [
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "BUILD_TARGET": JSON.stringify("client")
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
 output: {
  path: path.join(__dirname, '.build'),
  publicPath: `http://localhost:${port}/`,
  filename: 'client.js'
 }
}