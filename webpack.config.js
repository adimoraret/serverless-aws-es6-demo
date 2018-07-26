const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      }
    ]
  }
};