module.exports = require('babel-jest').createTransformer({
    babelrc: false,
    presets: ['@babel/env', '@babel/react']
});