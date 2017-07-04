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

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from '../reducers';
import zeroState from './zeroState';

const getInitialState = () => zeroState;

const initialize = ( reducer = rootReducer, initialState = zeroState ) =>
    createStore(
        reducer, initialState,
        applyMiddleware( thunkMiddleware )
    );

export { getInitialState };

export default initialize;
