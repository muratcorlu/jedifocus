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
