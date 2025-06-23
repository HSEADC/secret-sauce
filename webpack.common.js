const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack');
const path = require('path');

const paths = [
  '/secret-sauce/',
  '/secret-sauce/search.html',
  '/secret-sauce/articles.html',
  '/secret-sauce/about.html',
  '/secret-sauce/collaborations.html',
  '/secret-sauce/newsletter.html',
  '/secret-sauce/styleguide.html',

  // Visual Fast Food articles
  '/secret-sauce/articles/visual-fast-food/plantarosa.html',
  '/secret-sauce/articles/visual-fast-food/holiday-duo.html',
  '/secret-sauce/articles/visual-fast-food/isamaya.html',
  '/secret-sauce/articles/visual-fast-food/pixar.html',
  '/secret-sauce/articles/visual-fast-food/canyaon.html',
  '/secret-sauce/articles/visual-fast-food/castle.html',
  '/secret-sauce/articles/visual-fast-food/puma.html',
  '/secret-sauce/articles/visual-fast-food/osoi.html',
  '/secret-sauce/articles/visual-fast-food/severance.html',
  '/secret-sauce/articles/visual-fast-food/lapka.html',
  '/secret-sauce/articles/visual-fast-food/jeremy.html',
  '/secret-sauce/articles/visual-fast-food/studio.html',
  '/secret-sauce/articles/visual-fast-food/fenty.html',
  '/secret-sauce/articles/visual-fast-food/nothing.html',
  '/secret-sauce/articles/visual-fast-food/gisou.html',
  '/secret-sauce/articles/visual-fast-food/bork.html',
  '/secret-sauce/articles/visual-fast-food/toyota.html',
  '/secret-sauce/articles/visual-fast-food/nike.html',
  '/secret-sauce/articles/visual-fast-food/rhode.html',
  '/secret-sauce/articles/visual-fast-food/ismotion.html',
  '/secret-sauce/articles/visual-fast-food/gentle.html',
  '/secret-sauce/articles/visual-fast-food/apple-music.html',

  // Large articles
  '/secret-sauce/articles/large-articles/tiffany.html',
  '/secret-sauce/articles/large-articles/diesel.html',
  '/secret-sauce/articles/large-articles/charlie.html',
  '/secret-sauce/articles/large-articles/oem.html',
  '/secret-sauce/articles/large-articles/balencidada.html',

  // Errors
  '/secret-sauce/erors/404.html',
  '/secret-sauce/erors/500.html',
  '/secret-sauce/erors/505.html',
  '/secret-sauce/erors/504.html',

  // Authors
  '/secret-sauce/authors/masha.html',
  '/secret-sauce/authors/anya.html',
  '/secret-sauce/authors/vika.html',
  '/secret-sauce/authors/dasha.html',
  '/secret-sauce/authors/dashap.html',
  '/secret-sauce/authors/kate.html',
  '/secret-sauce/authors/ira.html',
  '/secret-sauce/authors/marina.html',
  '/secret-sauce/authors/ksusha.html'
]


module.exports = {
  entry: {
    index: './src/index.js',
    tab: './src/javascript/tab.js',
    changingimg: './src/javascript/ChangingImg.js',
    BurgerMenu: './src/javascript/BurgerMenu.js',
    FilterTip: './src/javascript/FilterTip.js',
    Stars: './src/javascript/Stars.js',
    searchVanilla: './src/javascript/search-vanilla.js',
    SearchData: './src/javascript/Search-data.js',
    search: './src/search.jsx',
    menubar: './src/javascript/menubar.jsx',
    scrolltop: './src/javascript/scroll-to-top.js',
    loadcards: './src/javascript/loadcards.js'
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
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
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
      chunks: ['index', 'tab', 'menubar', 'menubar']
    }),

    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'search', 'menubar']
    }),

    // все страницы разделов
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: [
        'index', 'menubar', 'FilterTip', 'Stars', 'scrolltop', 'loadcards']
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'Stars', 'menubar']
    }),

    new HtmlWebpackPlugin({
      template: './src/collaborations.html',
      filename: './collaborations.html',
      chunks: ['index', 'tab', 'menubar']
    }),

    new HtmlWebpackPlugin({
      template: './src/newsletter.html',
      filename: './newsletter.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    // публикации в разделе "статьи" (articles)
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/plantarosa.html',
      filename: './articles/visual-fast-food/plantarosa.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/holiday-duo.html',
      filename: './articles/visual-fast-food/holiday-duo.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/isamaya.html',
      filename: './articles/visual-fast-food/isamaya.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/pixar.html',
      filename: './articles/visual-fast-food/pixar.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/canyaon.html',
      filename: './articles/visual-fast-food/canyaon.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/castle.html',
      filename: './articles/visual-fast-food/castle.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/puma.html',
      filename: './articles/visual-fast-food/puma.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/osoi.html',
      filename: './articles/visual-fast-food/osoi.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/severance.html',
      filename: './articles/visual-fast-food/severance.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/lapka.html',
      filename: './articles/visual-fast-food/lapka.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/jeremy.html',
      filename: './articles/visual-fast-food/jeremy.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/studio.html',
      filename: './articles/visual-fast-food/studio.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/fenty.html',
      filename: './articles/visual-fast-food/fenty.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/nothing.html',
      filename: './articles/visual-fast-food/nothing.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/gisou.html',
      filename: './articles/visual-fast-food/gisou.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/bork.html',
      filename: './articles/visual-fast-food/bork.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/toyota.html',
      filename: './articles/visual-fast-food/toyota.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/nike.html',
      filename: './articles/visual-fast-food/nike.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/rhode.html',
      filename: './articles/visual-fast-food/rhode.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/ismotion.html',
      filename: './articles/visual-fast-food/ismotion.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/gentle.html',
      filename: './articles/visual-fast-food/gentle.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/tiffany.html',
      filename: './articles/large-articles/tiffany.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/diesel.html',
      filename: './articles/large-articles/diesel.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/charlie.html',
      filename: './articles/large-articles/charlie.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/brands.html',
      filename: './articles/large-articles/brands.html',
      chunks: ['index', 'BurgerMenu', 'Stars'],
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/oem.html',
      filename: './articles/large-articles/oem.html',
      chunks: ['index', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/large-articles/balencidada.html',
      filename: './articles/large-articles/balencidada.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    // публикации в разделе "ошибки" (erors)
    new HtmlWebpackPlugin({
      template: './src/erors/404.html',
      filename: './erors/404.html',
      chunks: ['index', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/erors/500.html',
      filename: './erors/500.html',
      chunks: ['index', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/erors/505.html',
      filename: './erors/505.html',
      chunks: ['index', 'menubar', 'Stars']
    }),
    new HtmlWebpackPlugin({
      template: './src/erors/504.html',
      filename: './erors/504.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/visual-fast-food/apple-music.html',
      filename: './articles/visual-fast-food/apple-music.html',
      chunks: ['index', 'changingimg', 'menubar', 'Stars']
    }),

    // публикации в разделе "авторы" (authors)

    new HtmlWebpackPlugin({
      template: './src/authors/masha.html',
      filename: './authors/masha.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/anya.html',
      filename: './authors/anya.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/vika.html',
      filename: './authors/vika.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/dasha.html',
      filename: './authors/dasha.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/dashap.html',
      filename: './authors/dashap.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/kate.html',
      filename: './authors/kate.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/ira.html',
      filename: './authors/ira.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/marina.html',
      filename: './authors/marina.html',
      chunks: ['index', 'menubar', 'Stars']
    }),

    new HtmlWebpackPlugin({
      template: './src/authors/ksusha.html',
      filename: './authors/ksusha.html',
      chunks: ['index', 'menubar', 'Stars']
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
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/searchbar.html'),
        location: 'searchbar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new SitemapPlugin({
      base: 'https://hseadc.github.io/secret-sauce',
      paths
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
