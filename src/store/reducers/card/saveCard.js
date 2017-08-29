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

const saveCard = ( state = {}, { payload: { goalContext, goalColumn, goalId: oldId, newId } } ) => ( {
    ...state,
    modalVisible: false,
    modalId: '',
    modalItem: '',
    modalColumn: '',
    [goalColumn]: ( goalContext === state.context ) ?
        state[goalColumn]
            .set( newId, state[goalColumn].get( oldId ) )
            .remove( oldId ) :
        state[goalColumn].remove( oldId )
} );

export default saveCard;
