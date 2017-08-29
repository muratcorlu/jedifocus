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

import './vendor/google/firebase/firebase.js';

import React from 'react';
import { render } from 'react-dom';
import { $, on, firstParentIncludingSelf as parent } from 'dombili';

import './scss/index.scss';

import * as config from './config.json';
const email = config.email;
const fbUserId = config.fbUserId;
const password = config.password;
delete config.email;
delete config.password;
delete config.fbUserId;

import AppContainer from './containers/app/AppContainer';

import './lib/ux/fonts';

on( document.body, 'mouseup', ( evt ) => {
    const parentModal = parent(
        evt.target,
        ( el ) => el.classList && el.classList.contains( 'modal-edit' )
    );

    if ( parentModal ) { return; }

    const textArea = document.querySelector( 'textarea' );

    if ( !textArea ) { return; }

    textArea.focus();
} );

render(
    <AppContainer config={config} email={email} password={password} userId={fbUserId} />,
    $( '#react-root' )
);
