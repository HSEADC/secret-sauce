const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    swiper: './src/javascript/swiper.js',
    tab: './src/javascript/tab.js',
    changingimg: './src/javascript/ChangingImg.js',
    BurgerMenu: './src/javascript/BurgerMenu.js',
    FilterTip: './src/javascript/FilterTip.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
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
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
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
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'swiper', 'tab', 'BurgerMenu']
    }),

    // все страницы разделов
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index', 'BurgerMenu', 'FilterTip']
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/newsletter.html',
      filename: './newsletter.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './src/styleguide.html',
      chunks: ['index', 'BurgerMenu']
    }),

    // публикации в разделе "статьи" (articles)
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/plantarosa.html',
      filename: './articles/visual-fast-food/plantarosa.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/holiday-duo.html',
      filename: './articles/visual-fast-food/holiday-duo.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/isamaya.html',
      filename: './articles/visual-fast-food/isamaya.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/pixar.html',
      filename: './articles/visual-fast-food/pixar.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/canyaon.html',
      filename: './articles/visual-fast-food/canyaon.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/castle.html',
      filename: './articles/visual-fast-food/castle.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/puma.html',
      filename: './articles/visual-fast-food/puma.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/osoi.html',
      filename: './articles/visual-fast-food/osoi.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/severance.html',
      filename: './articles/visual-fast-food/severance.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/lapka.html',
      filename: './articles/visual-fast-food/lapka.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/jeremy.html',
      filename: './articles/visual-fast-food/jeremy.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/studio.html',
      filename: './articles/visual-fast-food/studio.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/fenty.html',
      filename: './articles/visual-fast-food/fenty.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/nothing.html',
      filename: './articles/visual-fast-food/nothing.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/gisou.html',
      filename: './articles/visual-fast-food/gisou.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/bork.html',
      filename: './articles/visual-fast-food/bork.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/toyota.html',
      filename: './articles/visual-fast-food/toyota.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/nike.html',
      filename: './articles/visual-fast-food/nike.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/rhode.html',
      filename: './articles/visual-fast-food/rhode.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/ismotion.html',
      filename: './articles/visual-fast-food/ismotion.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/gentle.html',
      filename: './articles/visual-fast-food/gentle.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/tiffany.html',
      filename: './articles/large-articles/tiffany.html',
      chunks: ['index', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/diesel.html',
      filename: './articles/large-articles/diesel.html',
      chunks: ['index', 'BurgerMenu'],
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/charlie.html',
      filename: './articles/large-articles/charlie.html',
      chunks: ['index', 'BurgerMenu'],
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/oem.html',
      filename: './articles/large-articles/oem.html',
      chunks: ['index', 'BurgerMenu'],
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/balencidada.html',
      filename: './articles/large-articles/balencidada.html',
      chunks: ['index', 'BurgerMenu'],
    }),


    // публикации в разделе "ошибки" (erors)
    new HtmlWebpackPlugin({
      template: './src/erors/404.html',
      filename: './erors/404.html',
      chunks: ['index', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/erors/500.html',
      filename: './erors/500.html',
      chunks: ['index', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/erors/505.html',
      filename: './erors/505.html',
      chunks: ['index', 'BurgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/erors/504.html',
      filename: './erors/504.html',
      chunks: ['index', 'BurgerMenu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/apple-music.html',
      filename: './articles/visual-fast-food/apple-music.html',
      chunks: ['index', 'changingimg', 'BurgerMenu']
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
        priority: 'replace'
      }
    ])
  ]
}
