const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const nodeEnv = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: {
      src: './index',
    },
    context: path.join(process.cwd(), 'src'),
    output: {
      path: PATHS.dist,
      filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map',
  }
]);

const productionConfig = merge([
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
    contentBase: path.join(process.cwd(), 'dist')
  }),
  parts.lintjs({test: 'ts', include: PATHS.src}),
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        chunksSortMode: 'dependency',
      }),
    ],
  }
]);
const testConfig = merge([
    {
        module: {
            rules: [{
                test: /\.ts$/,
                enforce: 'post',
                loader: 'istanbul-instrumenter-loader',
                options: {esModules: true},
                exclude: /node_modules|spec/,
            }]
        }
    }
]);
module.exports = (env) => {
  if (nodeEnv === 'test') {
    return merge(commonConfig, testConfig);
  }
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};