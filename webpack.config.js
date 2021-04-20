const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "client", "index.js") },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "client", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "client", "dist", "index.html")
    })
  ],
};
