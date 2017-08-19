/*  __.-._
 *  '-._"7'  Jedi Focus
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

const saveGoal = ( state = {}, { payload } ) => ( {
    ...state,
    modalVisible: false,
    modalId: '',
    modalItem: '',
    modalBucket: '',
    [payload.get( 'bucket' )]: ( payload.get( 'context' ) === state.context ) ?
        state[payload.get( 'bucket' )] :
        state[payload.get( 'bucket' )].remove( payload.get( 'goalId' ) )
} );

export default saveGoal;
