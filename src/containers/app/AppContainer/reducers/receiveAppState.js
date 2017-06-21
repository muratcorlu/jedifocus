const receiveAppState = ( state = {}, { payload } ) => ( {
    ...state,
    bestIntentions: payload.get( 'bestIntentions' ),
    toDo: payload.get( 'toDo' ),
    inProgress: payload.get( 'inProgress' )
} );

export default receiveAppState;
