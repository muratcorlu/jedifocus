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

import { tick } from 'dombili';

import { JFDI_APP_UPDATE_CONTEXT, JFDI_APP_HIDE_MODAL } from '../../../lib/constants';

const changeContext = ( context ) => ( dispatch ) => {
    dispatch( {
        type: JFDI_APP_UPDATE_CONTEXT,
        payload: { context }
    } );

    tick( () => dispatch( { type: JFDI_APP_HIDE_MODAL } ) );
};

export { changeContext };
