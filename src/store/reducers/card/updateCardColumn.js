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

const moveColumn = ( activeColumn, currentColumn, nextColumn, goalId, state ) => {
    if ( currentColumn === nextColumn ) { return state[ activeColumn ]; }
    if ( activeColumn === currentColumn ) { return state[ activeColumn ].delete( goalId ); }
    if ( activeColumn === nextColumn ) { return state[ activeColumn].set( goalId, state.modalItem ); }
    return state[ activeColumn ];
};

const updateColumn = ( state = {}, { payload: { currentColumn, goalId, nextColumn } } ) => {
    const rest = [ currentColumn, nextColumn, goalId, state ];

    return {
        ...state,
        modalVisible: true,
        modalColumn: nextColumn,
        bestIntentions: moveColumn( 'bestIntentions', ...rest ),
        toDo: moveColumn( 'toDo', ...rest ),
        inProgress: moveColumn( 'inProgress', ...rest ),
        done: moveColumn( 'done', ...rest )
    };
};

export default updateColumn;
