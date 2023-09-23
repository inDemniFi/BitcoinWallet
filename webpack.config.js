const path = require('path');

module.exports = {
  entry: './src/index.ts', // Specify your entry point
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
        test: /\.tsx?$/, // Match TypeScript files
        use: 'ts-loader', // Use ts-loader for these files
        exclude: /node_modules/, // Exclude node_modules directory
      },
      // Add other loaders for CSS, images, etc. as needed
    ],
  },
};
