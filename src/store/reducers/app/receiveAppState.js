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

import { fromJS as makeImmutable } from 'immutable';

const receiveAppState = ( state = {}, { payload: { bestIntentions, inProgress, toDo } } ) => ( {
    ...state,
    appStateFetched: true,
    bestIntentions: makeImmutable( bestIntentions || {} ),
    inProgress: makeImmutable( inProgress || {} ),
    modalContextVisible: false,
    modalRevealed: false,
    modalVisible: false,
    toDo: makeImmutable( toDo || {} )
} );

export default receiveAppState;
