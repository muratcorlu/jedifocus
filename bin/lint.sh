#!/usr/bin/env bash

#   __
#  |::|    Jedi Focus
#  |::|
# _|//|_  Do. Or do not.
# |____|  There is no try.
#  || |
#  | ||   This project is a part of the “Byte-Sized JavaScript” videocasts.
#  | ||   You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#  || |
#  || |   MIT Licensed — See LICENSE.md
#  || |
#  | ||   Send your comments, suggestions, and feedback to me@volkan.io
#  ||||
#

eslint src
eslint webpack.config.js
sass-lint -c .sass-lint.yml --no-exit -v
