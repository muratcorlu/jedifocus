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

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers';
import zeroState from './zeroState';

const getInitialState = () => zeroState;

const initialize = ( reducer = rootReducer, initialState = zeroState ) =>
    createStore(
        reducer, initialState,
        applyMiddleware( thunkMiddleware )
    );

const initializeWithUser = ( { userId } ) => initialize(
    rootReducer, { ...zeroState, userId }
);

export { getInitialState };

export default initializeWithUser;
