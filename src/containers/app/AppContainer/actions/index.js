/*   __
 *  |::|    Jedi Focus
 *  |::|
 * _|//|_  Do. Or do not.
 * |____|  There is no try.
 *  || |
 *  | ||   This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  | ||   You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *  || |
 *  || |   MIT Licensed — See LICENSE.md
 *  || |
 *  | ||   Send your comments, suggestions, and feedback to me@volkan.io
 *  ||||
 */

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
