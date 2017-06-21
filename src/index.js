import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import AppContainer from './containers/app/AppContainer';

import './css/reset.css';
import './css/main.css';
import './css/columns.css';
import './css/card.css';

import * as config from './config.json';

const email = config.email;
const password = config.password;

delete config.email;
delete config.password;

render(
    <AppContainer config={config} email={email} password={password} />,
    $( '#react-root' )
);
