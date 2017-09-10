#!/usr/bin/env bash

#  __.-._
#  '-._"7'  JediFocus
#   /'.-c
#   |  /T   Do. Or do not.
#  _)_/LI   There is no try.
#
#  This project is a part of the “Byte-Sized JavaScript” videocasts.
#  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
#
#  MIT Licensed — See LICENSE.md
#
#  Send your comments, suggestions, and feedback to me@volkan.io

echo ""
echo "  __.-._"
echo "  '-._\"7'   JediFocus"
echo "   \/'.-c?"
echo "   |  \/T   Do. Or do not."
echo "  _\)_\/LI  There is no try."
echo ""

sleep 2

NODE_ENV=development OFFLINE_ENABLED=false webpack --watch
