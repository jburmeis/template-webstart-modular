const config = require('./config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(config, {
  mode: 'production',
  cache: false,

  // Rules how to handle different file types
  module: {
    rules: [
      {
        // Typescript & React files
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        // CSS files
        test: /\.css$/i,
        use: [
          // 2. Places loaded CSS into inline style-tags
          { loader: "style-loader" },
          // 1. Loads CSS from import statements
          { loader: "css-loader" }
        ]
      },
      /**
       * Asset Modules: https://webpack.js.org/guides/asset-modules/
       * asset/inline: inline asset as data URI
       * asset/resource: emits a separate file and exports the URL
       * asset: automatically choose between resource and inline (inline if file size is less than 8kb).
       */
      {
        // Font files
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        type: 'asset'
      },
      {
        // Image files
        test: /\.(ttf|eot|svg|ico|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        type: 'asset'
      }
    ],
  },

  // Plugin for cleanup and CSS bundling export
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css"
    })
  ],

  // Optimizers to minify code and split bundle into chunks
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

});
