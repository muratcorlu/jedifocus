import React from 'react';
import { render } from 'react-dom';
import { $ } from 'dombili';

import AppContainer from './containers/app/AppContainer';

render(<AppContainer />, $('#react-root'));
