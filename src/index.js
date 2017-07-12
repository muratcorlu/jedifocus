/*   __
 *  |::|    Jedi Focus
 *  |::|
 * _|//|_  Do. Or do not.
 * |____|  There is no try.
 *  || |
 *  | ||   This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  | ||   You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *  || |
 *  || |   MIT Licensed — See LICENSE.md
 *  || |
 *  | ||   Send your comments, suggestions, and feedback to me@volkan.io
 *  ||||
 */

import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import './css';

import * as config from './config.json';
const email = config.email;
const fbUserId = config.fbUserId;
const password = config.password;
delete config.email;
delete config.password;
delete config.fbUserId;

import AppContainer from './containers/app/AppContainer';

render(
    <AppContainer config={config} email={email} password={password} userId={fbUserId} />,
    $( '#react-root' )
);
