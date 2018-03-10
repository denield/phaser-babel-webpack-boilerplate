const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const APP_DIR = resolve(__dirname, 'src')

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets'}]),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: `${APP_DIR}/index.html`
    }),
    new DefinePlugin({
      WEBGL_RENDERER: `true`,
      CANVAS_RENDERER: `true`
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}