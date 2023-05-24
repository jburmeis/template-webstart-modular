const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const pathResolve = (subpath) => path.resolve(__dirname, subpath);

const sourcePath = pathResolve('../../src');
const outputPath = pathResolve('../../dist');
const publicPath = process.env.PUBLIC_PATH || '/';


module.exports = {
  entry: [
    pathResolve(sourcePath, 'index.tsx')
  ],

  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    publicPath: publicPath
  },

  resolve: {
    modules: [
      sourcePath,
      "node_modules"
    ],
    // Enable the typescript path aliases for webpack
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],

    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webstart-project-name',
      template: pathResolve('../../src/index.ejs'),
    })
  ],

};
