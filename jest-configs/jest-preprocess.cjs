/* eslint-disable @typescript-eslint/no-var-requires */
const babelOptions = {
  presets: ['@babel/preset-typescript'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
