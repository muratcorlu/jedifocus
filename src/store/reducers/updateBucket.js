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

const moveBucket = ( activeBucket, currentBucket, nextBucket, goalId, state ) => {
    if ( currentBucket === nextBucket ) { return state[ activeBucket ]; }
    if ( activeBucket === currentBucket ) { return state[ activeBucket ].delete( goalId ); }
    if ( activeBucket === nextBucket ) { return state[ activeBucket].set( goalId, state.modalItem ); }
    return state[ activeBucket ];
};

const updateBucket = ( state = {}, { payload } ) => {
    const currentBucket = payload.get( 'currentBucket' );
    const nextBucket = payload.get( 'nextBucket' );
    const id = payload.get( 'id' );

    const rest = [ currentBucket, nextBucket, id, state ];

    return {
        ...state,
        modalVisible: true,
        modalBucket: nextBucket,
        bestIntentions: moveBucket( 'bestIntentions', ...rest ),
        toDo: moveBucket( 'toDo', ...rest ),
        inProgress: moveBucket( 'inProgress', ...rest ),
        done: moveBucket( 'done', ...rest )
    };
};

export default updateBucket;
