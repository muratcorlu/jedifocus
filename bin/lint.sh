#!/usr/bin/env bash

#  __.-._
#  '-._"7'  Jedi Focus
#   /'.-c
#   |  /T   Do. Or do not.
#  _)_/LI   There is no try.

eslint src
eslint webpack.config.js
sass-lint -c .sass-lint.yml --no-exit -v
