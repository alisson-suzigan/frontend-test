const
  webpack = require('webpack'),
  sourcePath = `${__dirname}/src`,
  publicPath = `${__dirname}/public`;


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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },

  plugins: [
    // Remove vendor scripts from app.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    })
  ]
}