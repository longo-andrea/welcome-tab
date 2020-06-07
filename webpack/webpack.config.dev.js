const WebpackConfig = require('./webpack.config.js');

var config = WebpackConfig;
config.watch = true;
config.mode = 'development';

module.exports = WebpackConfig;