import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import AppContainer from './containers/app/AppContainer';

import './css/reset.css';
import './css/main.css';
import './css/columns.css';

render( <AppContainer />, $( '#react-root' ) );
