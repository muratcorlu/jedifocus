const saveGoal = ( state = {} ) => ( {
    ...state,
    modalVisible: false,
    modalId: '',
    modalItem: '',
    modalBucket: ''
} );

export default saveGoal;
