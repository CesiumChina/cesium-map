/*
 * @Author: Caven
 * @Date: 2019-03-28 12:44:36
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-22 00:14:01
 */
const path = require('path')
const webpack = require('webpack')
module.exports = env => {
  const IS_PROD = (env && env.production) || false
  let plugins = []
  if (IS_PROD) {
    plugins.concat([new webpack.NoEmitOnErrorsPlugin()])
  }
  return {
    entry: {
      'cesium-map': ['entry']
    },
    devtool: IS_PROD ? false : 'cheap-module-eval-source-map',
    output: {
      filename: IS_PROD ? '[name].min.js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      sourcePrefix: ''
    },
    amd: {
      toUrlUndefinded: true
    },
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
            compact: false,
            ignore: ['checkTree']
          }
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 20000
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.css'],
      alias: {
        entry: './src/index.js'
      }
    },
    plugins
  }
}
