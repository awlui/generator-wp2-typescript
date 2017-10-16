// Karma configuration
var path = require('path');
var webpackConfig = require('./webpack.config')('test');
webpackConfig.entry = null;
console.log(webpackConfig.module)
module.exports = function(config) {
  config.set({
    // Base path, that will be used to resolve files and exclude
    // basePath: '',
    // Frameworks to use
    frameworks: ['mocha', 'chai'],

    // List of files / patterns to load in the browser
    files: [
    './src/**/*.spec.ts',
    'node_modules/phantomjs-polyfill/bind-polyfill.js',
    ],

    // List of preprocessors
    preprocessors: {
      './src/**/*.spec.ts': ['webpack']
      

    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: {
        colors: true,
      },
    },
    reporters: ['progress', 'spec', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary', 'lcovonly'],
      fixWebpackSourcePaths: true,
      dir: path.join(__dirname, 'coverage'),
      skipFilesWithNoCoverage: false,
    },
    singleRun: true,
    browsers: [
      'PhantomJS'
    ]

  });
};