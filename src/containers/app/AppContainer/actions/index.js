import { fromJS as makeImmutable } from 'immutable';

import { sendFetchAppStateRequest } from '../network';

import {
    JFDI_REQUEST_APP_STATE,
    JFDI_RECEIVE_APP_STATE
} from '../../../../lib/constants';

const requestAppState = () => ( { type: JFDI_REQUEST_APP_STATE } );

const receiveAppState = ( data ) => ( {
    type: JFDI_RECEIVE_APP_STATE,
    payload: makeImmutable( {
        bestIntentions: data[ 0 ],
        toDo: data[ 1 ],
        inProgress: data[ 2 ]
    } )
} );

const fetchAppState = ( config, email, password ) => ( dispatch ) => {
    dispatch( requestAppState() );

    sendFetchAppStateRequest( config, email, password )
        .then( ( data ) => dispatch( receiveAppState( data ) ) );
};

export { fetchAppState };
