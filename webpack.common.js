const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    styleguide: './src/javascripts/styleguide.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),

    // все страницы разделов
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/newsletter.html',
      filename: './newsletter.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index'],
    }),

    // публикации в разделе "статьи" (articles)
    new HtmlWebpackPlugin({
      template: './src/articles/article-1.html',
      filename: './articles/article-1.html',
      chunks: ['index'],
    }),

    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace',
      },
    ]),
  ],
};
