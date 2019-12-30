'use strict';

module.exports = {
  hooks: {
    'pre-commit': 'prettier --loglevel warn --check **/*.js',
  },
};
