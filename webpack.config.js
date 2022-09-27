const webpack = require('webpack');
const path = require('path');
const fs = require("fs");
const { NormalModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CircularDependencyPlugin = require('circular-dependency-plugin');
// const AntdScssThemePlugin = require('antd-scss-theme-plugin');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // host:'172.16.20.82',
    // disableHostCheck: true,
    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    port: 8000,
    historyApiFallback: true,
  },
  devtool: "cheap-eval-source-map",

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@assests': path.resolve(__dirname, 'src/assests'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    }
  },
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000,
    hints: false
  },
  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id][hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.es6$|\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /node_modules\/.*\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|ico)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              // name: '[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NormalModuleReplacementPlugin(
      /.*\/generated\/iconSvgPaths.js/,
      path.resolve(__dirname, "emptyIconSvgPaths.js"),
    ),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /locale$/
    }),
    new HtmlWebpackPlugin({
      inject: true,
      imgUrl: '../src/assests/images/oway-blue-logo.png',
      template: 'public/index.ejs',
      favicon: 'src/assests/images/oway.ico'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id][hash].css"
    }),
    new Dotenv({
      path: './.env.development',  // load env url
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false
    })
    // new UglifyJsPlugin({ sourceMap: true }),
    // new AntdScssThemePlugin('./UI/theme.scss'), 
    // new BundleAnalyzerPlugin()  
  ],
  mode: 'development'
}
