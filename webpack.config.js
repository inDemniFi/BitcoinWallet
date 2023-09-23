const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // Updated entry point for the web
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Match TypeScript and JavaScript files
        use: 'babel-loader', // Use Babel for these files
        exclude: /node_modules/, // Exclude node_modules directory
      },
      // Add other loaders for CSS, images, etc. as needed
    ],
  }

};
