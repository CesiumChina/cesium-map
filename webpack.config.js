/**
 * @Author: Caven
 * @Date: 2019-03-28 12:44:36
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
      'cesium.map': ['entry']
    },
    devtool: IS_PROD ? false : 'cheap-module-eval-source-map',
    output: {
      filename: IS_PROD ? '[name].min.js' : '[name].js',
      path: path.resolve(__dirname, 'build'),
      sourcePrefix: ''
    },
    amd: {
      toUrlUndefined: true
    },
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
            compact: false,
            ignore: ['checkTree']
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
