const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8082,
    publicPath: '/dist/',
  },
};
