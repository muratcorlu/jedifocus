import { getInitialState } from '../store';
import { createRootReducer } from 'kink';

import * as constants from '../../../../lib/constants';

import receiveAppState from './receiveAppState';

const rootReducer = createRootReducer( getInitialState, {
    [constants.JFDI_RECEIVE_APP_STATE]: receiveAppState
} );

export { rootReducer };
