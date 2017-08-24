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

import { Map } from 'immutable';

const receiveAppState = ( state = {}, { payload } ) => ( {
    ...state,
    appStateFetched: true,
    modalVisible: false,
    modalContextVisible: false,
    bestIntentions: payload.get( 'bestIntentions' ) || Map.of(),
    toDo: payload.get( 'toDo' ) || Map.of(),
    inProgress: payload.get( 'inProgress' ) || Map.of()
} );

export default receiveAppState;
