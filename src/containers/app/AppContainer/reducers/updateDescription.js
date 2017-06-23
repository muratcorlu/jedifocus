const updateDescription = ( state = {}, { payload } ) => ( {
    ...state,
    modalVisible: true,
    modalItem: payload.get( 'value' ),
    [ payload.get( 'bucket' ) ]: state[ payload.get( 'bucket' ) ]
        .set( payload.get( 'id' ), payload.get( 'value' ) )
} );

export default updateDescription;
