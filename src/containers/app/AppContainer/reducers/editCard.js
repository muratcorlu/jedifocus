const editCard = ( state = {}, { payload } ) => ( {
    ...state,
    modalVisible: true,
    modalId: payload.id,
    modalItem: state[ payload.bucket ].get( payload.id ),
    modalBucket: payload.bucket
} );

export default editCard;
