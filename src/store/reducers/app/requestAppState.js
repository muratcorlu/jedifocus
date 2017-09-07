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

const getRandomOne = ( list ) => {
    if ( !list ) { return ''; }
    if ( !list.size ) { return ''; }

    return list.get( Math.floor( Math.random() * list.size ) );
};

const requestAppState = ( state = {} ) => ( {
    ...state,
    appStateFetched: false,
    appRandomQuote: getRandomOne( state.quotes )
} );

export default requestAppState;
