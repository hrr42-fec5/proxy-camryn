const webpack = require('webpack');
module.exports = {
   optimization: {
      splitChunks: {
         chunks: 'all'
      }
   }
};