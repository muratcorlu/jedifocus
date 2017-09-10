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

import { sendFetchAppStateRequest } from '../network';

import {
    JFDI_APP_REQUEST_STATE,
    JFDI_APP_RECEIVE_STATE
} from '../../../../lib/constants';

const requestAppState = () => ( { type: JFDI_APP_REQUEST_STATE } );

const receiveAppState = ( data ) => ( {
    type: JFDI_APP_RECEIVE_STATE,
    payload: {
        bestIntentions: data[0],
        toDo: data[1],
        inProgress: data[2]
    }
} );

const fetchAppState = ( config, email, password, userId, context ) => ( dispatch ) => {
    dispatch( requestAppState() );

    sendFetchAppStateRequest( config, email, password, userId, context )
        .then(
            ( data ) => setTimeout( () => dispatch( receiveAppState( data ) ), 1200 )
        );
};

export { fetchAppState };
