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

const moveToToDo = ( state = {}, { payload } ) => ( {
    ...state,
    toDo: state.toDo.set( payload.id, state[payload.column].get( payload.id ) ),
    [payload.column]: state[payload.column].remove( payload.id )
} );

export default moveToToDo;
