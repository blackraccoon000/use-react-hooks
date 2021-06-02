const { merge } = require('webpack-merge');

const common = require('./webpack/webpack.common');
const dev = require('./webpack/webpack.dev');
const prod = require('./webpack/webpack.prod');

module.exports = (env) => {
  const result = env.development
    ? 'development'
    : env.production
    ? 'production'
    : 'No matching configuration was found!';
  switch (result) {
    case 'development':
      return merge(common, dev);
    case 'production':
      return merge(common, prod);
    default:
      throw new Error(result);
  }
};
