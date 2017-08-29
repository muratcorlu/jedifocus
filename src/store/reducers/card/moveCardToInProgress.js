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

const moveCardToInProgress = ( state = {}, { payload: { oldId, newId, column } } ) => ( {
    ...state,
    inProgress: state.inProgress.set( newId, state[column].get( oldId ) ),
    [column]: state[column].remove( oldId )
} );

export default moveCardToInProgress;
