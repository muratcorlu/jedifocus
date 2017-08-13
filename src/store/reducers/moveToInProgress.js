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

const moveToInProgress = ( state = {}, { payload } ) => ( {
    ...state,
    inProgress: state.inProgress.set( payload.id, state[payload.bucket].get( payload.id ) ),
    [payload.bucket]: state[payload.bucket].remove( payload.id )
} );

export default moveToInProgress;
