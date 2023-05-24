const config = require('./config');
const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  cache: {
    type: 'filesystem'
  },

  // Development server 
  // https://webpack.js.org/configuration/dev-server
  devServer: {
    // Make server available across the local network
    host: '0.0.0.0',
    // Run server on port 3000
    port: process.env.PORT || 3000,
    // Allow everyone to access this server
    allowedHosts: "all",
    // Don't host additional static content
    static: false,
    /* Serve index.html whenever a 404 would happen. 
     * Needed to match user expectations when entering a url directly in browser.
     */
    historyApiFallback: true,

    // Open default-browser at startup. Disable this, if it annoys you
    open: {
      target: ['http://localhost:3000'],
    },
    // Proxy requests below the path /api to a backend server
    /*
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        bypass: function (req, res, proxyOptions) {
          // keep all requests that accept HTML as an answer to our index.html
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        }
      }
    },
    */
  },

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
              // there should be 1 cpu for the fork-ts-checker-webpack-plugin
              workers: require('os').cpus().length - 1,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                'react-refresh/babel'
              ]
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
        type: 'asset',
      },
      {
        // Image files
        test: /\.(ttf|eot|svg|ico|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        type: 'asset',
      }
    ],
  },

  // Plugins for typechecking and hot-reload
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        build: true,
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ],

});
