/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
 */

import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import './css';

import * as config from './config.json';
const email = config.email;
const password = config.password;
delete config.email;
delete config.password;

import AppContainer from './containers/app/AppContainer';

render(
    <AppContainer config={config} email={email} password={password} />,
    $( '#react-root' )
);
