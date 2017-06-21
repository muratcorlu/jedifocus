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
