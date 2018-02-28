const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
  // context: path.join(__dirname, '/'),
  entry: { modules: './index.js' },
  output: {
    path: path.resolve(__dirname, 'public/bundles/'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: [path.resolve(__dirname, 'public'), path.resolve(__dirname, 'node_modules')],
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400,
              name: '[path][name].[ext]?[hash:base64]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, './src')],
    extensions: ['.js', '.css', '.jsx', '.sss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
      PropTypes: 'prop-types'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new FlowWebpackPlugin()
  ],
  devServer: {
    host: 'localhost',
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    historyApiFallback: true,
    hot: true,
    index: 'index.html'
  }
}
