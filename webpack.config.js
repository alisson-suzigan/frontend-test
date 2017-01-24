const
  sourcePath = `${__dirname}/src`,
  publicPath = `${__dirname}/public`,
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: sourcePath,
  entry: {
    app: './index.jsx',
    vendor: [
      'axios',
      'react',
      'react-dom',
    ]
  },
  output: {
    path: publicPath,
    filename: 'js/[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules']
  },

  // Configure webpack-dev-server
  devServer: {
    contentBase: sourcePath,
    port: 3000,
    quiet: false,
    noInfo: false,
    hot: true,
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    }
  },

  // Configure modules (loaders, preLoaders, postLoaders)
  module: {
     preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },

    ],
  },

  plugins: [
    // Remove vendor scripts from app.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new ExtractTextPlugin('css/app.css', {
      allChunks: true
    })
  ]
}