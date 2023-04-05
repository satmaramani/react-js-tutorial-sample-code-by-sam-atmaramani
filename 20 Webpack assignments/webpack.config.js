const path = require('path');
const webpack = require('webpack');

// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
// };

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    // devtool: 'inline-source-map',
    devServer: {
      hot: true,
      // ... other config omitted
    },
    plugins: [
      // Enable the plugin
      new webpack.HotModuleReplacementPlugin(),
    ],
  }