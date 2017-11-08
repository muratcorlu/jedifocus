/*  __.-._
 *  '-._"7'  JediFocus
 *   /'.-c
 *   |  /T   Do. Or do not.
 *  _)_/LI   There is no try.
 *
 *  This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 *  MIT Licensed — See LICENSE.md
 *
 *  Send your comments, suggestions, and feedback to me@volkan.io
 */

import 'jedifocus.lib/vendor/google/firebase/firebase';

import { maintainFocusToModalTextArea } from 'jedifocus.lib/dom';
import connectedAppContainer from 'jedifocus.lib/hocs/connectedAppContainer';

import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import 'jedifocus.styles/index.scss';

import * as config from '../config.json';

maintainFocusToModalTextArea();

import AppContainer from 'jedifocus.containers/app/AppContainer';

const ConnectedAppContainer = connectedAppContainer( AppContainer, config );

render(
    <ConnectedAppContainer />,
    $( '#react-root' )
);

