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
