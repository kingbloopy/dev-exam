
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'entry': "./scripts/entry.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      // // css global which not include in components
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'raw-loader'
        })
      },

      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },
      // // SASS global which not include in components
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['raw-loader', 'sass-loader']
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        swiper: {
          test: /[\\/]node_modules[\\/](swiper)[\\/]/,
          name: 'swiper',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets")
  }
}
