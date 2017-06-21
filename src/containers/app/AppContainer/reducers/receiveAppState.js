const receiveAppState = ( state = {}, { payload } ) => ( {
    ...state,
    appStateFetched: true,
    bestIntentions: payload.get( 'bestIntentions' ),
    toDo: payload.get( 'toDo' ),
    inProgress: payload.get( 'inProgress' )
} );

export default receiveAppState;
