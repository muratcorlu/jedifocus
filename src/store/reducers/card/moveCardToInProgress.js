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

const moveCardToInProgress = ( state = {}, { payload: { id, column } } ) => ( {
    ...state,
    inProgress: state.inProgress.set( id, state[column].get( id ) ),
    [column]: state[column].remove( id )
} );

export default moveCardToInProgress;
