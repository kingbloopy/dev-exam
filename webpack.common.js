
const path = require("path")

module.exports = {
  entry: {
    'entry': "./src/entry.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      { 
        test: /\.s[ac]ss$/i, 
        exclude: /node_modules/,
        use: 'sass-loader' 
      },
      { 
        test: /\.less$/i, 
        exclude: /node_modules/,
        use: 'less-loader' 
      },
      { 
        test: /\.styl$/i, 
        exclude: /node_modules/,
        use: 'stylus-loader' 
      },
      { 
        test: /\.scss\.liquid$/, 
        exclude: /node_modules/,
        use: 'raw-loader' 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets")
  }
}
