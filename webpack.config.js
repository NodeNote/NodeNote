var path = require('path')
var webpack = require('webpack')

var plugins = [
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]
var entry = null

entry = ['./index.js']
entry.push('webpack-dev-server/client?http://localhost:3000')
entry.push('webpack/hot/only-dev-server')
plugins.push(new webpack.HotModuleReplacementPlugin())
plugins.push(new webpack.NoErrorsPlugin())

module.exports = {
  devtool: 'eval',
  entry: entry,
  context: __dirname,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: plugins,
  resolve: {
    alias: {
      'redux': path.join(__dirname, 'node_modules/redux')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, '..', '..', 'src')
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  }
}
