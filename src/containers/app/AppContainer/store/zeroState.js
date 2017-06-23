import { fromJS as makeImmutable } from 'immutable';

const zeroState = {
    bestIntentions: makeImmutable( {} ),
    toDo: makeImmutable( {} ),
    inProgress: makeImmutable( {} ),
    done: makeImmutable( {} ),
    appStateFetched: false,
    modalVisible: false,
    modalId: '',
    modalItem: '',
    modalBucket: ''
};

export default zeroState;
