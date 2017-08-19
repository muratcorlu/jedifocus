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

const editCard = ( state = {}, { payload } ) => ( {
    ...state,
    modalVisible: true,
    modalContextVisible: false,
    modalId: payload.id,
    modalItem: state[ payload.bucket ].get( payload.id ),
    modalContext: state.context,
    modalBucket: payload.bucket
} );

export default editCard;
