'use strict';

const {join} = require('path')

module.exports = {
  extends: join(__dirname, 'index.js'),
  rules: {
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2]
  }
}
