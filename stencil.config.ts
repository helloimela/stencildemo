var Path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.conf.js');
var bundleLocation = 'bundles/bundle.js';

webpackConfig.context = __dirname;
