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

const moveColumn = ( activeColumn, currentColumn, nextColumn, cardId, state ) => {
    if ( currentColumn === nextColumn ) { return state[activeColumn]; }
    if ( activeColumn === currentColumn ) { return state[activeColumn].delete( cardId ); }
    if ( activeColumn === nextColumn ) { return state[activeColumn].set( cardId, state.modalDescription ); }
    return state[activeColumn];
};

const updateColumn = ( state = {}, { payload: { currentColumn, cardId, nextColumn } } ) => {
    const rest = [ currentColumn, nextColumn, cardId, state ];

    return {
        ...state,
        modalColumn: nextColumn,
        bestIntentions: moveColumn( 'bestIntentions', ...rest ),
        toDo: moveColumn( 'toDo', ...rest ),
        inProgress: moveColumn( 'inProgress', ...rest ),
        done: moveColumn( 'done', ...rest )
    };
};

export default updateColumn;
