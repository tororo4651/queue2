const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].bundle.[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',  // ？ 現在、不可。
  },
  module: {
    rules: [
      {
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),
  ],
});
